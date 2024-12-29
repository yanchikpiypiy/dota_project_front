import classes from "./assets/Hero.module.css"
import { useState,useEffect, useContext } from "react";
import { HeroDotaContext } from "./contexts/HeroShortDataContext";
import IconSpell from "./ReusableComponents/IconSpell";
import AbilityDescription from "./AbilityDescription";
export default function HeroAbilities(){
    const {data,abilities} = useContext(HeroDotaContext)
    const [activeId, setActiveId] = useState(0);
    const [activeItem, setActiveItem] = useState(abilities[0])
    const abilityVideoName = activeItem.name.split(" ").join("_").replace(/'/g, "")
    const heroVideoName = data.name.split(" ").join("_").replace(/'/g, "")
    const videoName = heroVideoName+"_"+abilityVideoName
    function handleClick(id, item){
        console.log("Clicked item ID: ", id); 
        setActiveId(id)
        setActiveItem(item)
    }
    return (
        <div className={classes["bottomContainer"]}>
            <div className={classes["nightmare"]}>
                <div className={classes["topLabel"]}>

                </div>
                <div className={classes["spells"]}>
                    <div className={classes["spellAssets"]}>
                        <div className={classes["videoBox"]}>
                            <video key={videoName} autoPlay loop muted className={classes["spellVideo"]}>
                                <source src={`/assets/videos/${videoName}.webm`}></source>
                            </video>
                        </div>
                        <div className={classes["spellBar"]}>
                            {abilities.map((item,index) => {
                                return <IconSpell key={item.id} active={activeId===index} heroname={data.name}  abilityname={item.name} handleClick={() => handleClick(index,item)}></IconSpell>
                            })}


                            {/* <div className={classes["spell"]}  style={{backgroundImage: "url('/assets/abilities_images/Alchemist_Acid_Spray.png')"}}></div>
                            <div className={`${classes["spell"]} ${classes["notActive"]}`}  style={{backgroundImage: "url('/assets/abilities_images/Alchemist_Berserk_Potion.png')"}}></div>
                            <div className={`${classes["spell"]} ${classes["notActive"]}`}  style={{backgroundImage: "url('/assets/abilities_images/Alchemist_Chemical_Rage.png')"}}></div>
                            <div className={`${classes["spell"]} ${classes["notActive"]}`}  style={{backgroundImage: "url('/assets/abilities_images/Alchemist_Corrosive_Weaponry.png')"}}></div>
                            <div className={`${classes["spell"]} ${classes["notActive"]}`}  style={{backgroundImage: "url('/assets/abilities_images/Alchemist_Unstable_Concoction.png')"}}></div> */}
                        </div>
                    </div>
                    <AbilityDescription item={activeItem} name={data.name}></AbilityDescription>
                </div>
            </div>
        </div>
    );
}