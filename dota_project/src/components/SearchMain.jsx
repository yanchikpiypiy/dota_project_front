import classes from "../public/css/Search.module.css";
import Header from "./Header";
// import heroes from "../public/final_hero.json"
import HeroCard from "./HeroCard";
import React, { useState, useEffect } from 'react';
import { useLoaderData } from "react-router-dom";
export default function SearchMain() {
  const fetched_heroes = useLoaderData()
  const [clicked, setCliked] = useState("")
  const [filteredHeroes, setFilteredHeroes] = useState(fetched_heroes);
  const [search, setSearch] = useState("")
  function handleChange(event){
    const searchTerm = event.target.value;
    setSearch(searchTerm);

  }
  function handleClick(attribute){
    setCliked(prev => (prev === attribute ? "" : attribute));
  }
  useEffect(() => {
    let filtered = fetched_heroes;

    if (clicked) {
      filtered = filtered.filter(hero => hero.primary_attribute === clicked);
    }


    if (search) {
      filtered = filtered.filter(hero => hero.name.toLowerCase().includes(search.toLowerCase()));
    }

    setFilteredHeroes(filtered);
  }, [search, clicked,fetched_heroes]);

  let num = 0;
  return (
    <div className={classes["content-container"]}>
      <Header></Header>

      <div className={classes.description}>
        <div className={classes.header}>
          <h3> Choose your hero</h3>
        </div>
        <div className={classes.textick}>
          From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero pool
          is massive and limitlessly diverse. Unleash incredible abilities and devastating
          ultimates on your way to victory.
        </div>
      </div>
      <div className={classes["filter-bar"]}>
        <div className={classes.txt}>Filter heroes</div>
        <div className={classes.attributes}>
          <div className={classes.text}>Attribute</div>
          <div
            className={`${classes.attribute} ${clicked === "str" ? classes.active : ""}` }
            style={{ backgroundImage: "url(/assets/icons/filter-str-active.png)" }}
            onClick={() => handleClick("str")}
          ></div>
          <div
            className={`${classes.attribute} ${clicked === "agi" ? classes.active : ""}` }
            style={{ backgroundImage: "url(/assets/icons/filter-agi-active.png)" }}
            onClick={() => handleClick("agi")}
          ></div>
          <div
            className={`${classes.attribute} ${clicked === "int" ? classes.active : ""}` }
            style={{ backgroundImage: "url(/assets/icons/filter-int-active.png)" }}
            onClick={() => handleClick("int")}
          ></div>
          <div
            className={`${classes.attribute} ${clicked === "all" ? classes.active : ""}` }
            style={{ backgroundImage: "url(/assets/icons/filter-uni-active.png)" }}
            onClick={() => handleClick("all")}
          ></div>
        </div>
        <div className={classes.complexity}>
          <div className={classes.text}>Complexity</div>
          <div
            className={classes.attribute}
            style={{ backgroundImage: "url(/assets/icons/filter-diamond.png)" }}
          ></div>
          <div
            className={classes.attribute}
            style={{ backgroundImage: "url(/assets/icons/filter-diamond.png)" }}
          ></div>
          <div
            className={classes.attribute}
            style={{ backgroundImage: "url(/assets/icons/filter-diamond.png)" }}
          ></div>
        </div>
        <div className={classes["input-search"]}>
          <div
            className={classes["search-icon"]}
            style={{ backgroundImage: "url(/assets/icons/search.svg)" }}
          ></div>
          <div>
            <input type="text" name="" id="" value={search} onChange={handleChange}></input>
          </div>
        </div>
      </div>

      <div className={classes["heroes-list"]}>
        {filteredHeroes.map((hero,index) => {
          let name = hero.name.replace(/ /g, "_").toLocaleLowerCase()
          name = name.replace(/'/g, "")
          let attribute = hero.primary_attribute
          
          if ((index) % 5 === 0 && index !== 0) {
            num = (Math.floor(index / 5)) * 142;
          }
          if (attribute === "all"){
            attribute = "universal"
          }
          else if (attribute === "str"){
            attribute = "strength"
          }
          else if (attribute === "agi"){
            attribute = "agility"
          }
          else{
            attribute = "intelligence"
          }
          return (
            <HeroCard 
              name={name} 
              attribute={attribute} 
              num={num} 
              index={index}
              key={index}
              properName={hero.name}
            >

            </HeroCard>
          )
        })}
      </div>
    </div>
  );
}
export async function loader(){
  try {
    const response = await fetch("http://127.0.0.1:8000/heroes");
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const result = await response.json();
    return result; // Return the data
  } catch (error) {
    console.error(error.message);
    throw error; // Let React Router handle the error
  }
}