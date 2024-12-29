import classes from "./assets/Hero.module.css"
import { useContext } from "react";
import { HeroDotaContext } from "./contexts/HeroShortDataContext";
export default function HeroContainer(){
    const {data,abilities} = useContext(HeroDotaContext)
    const attr = data.primary_attribute === "str" ? "strength" : data.primary_attribute === "agi" ? "agility" : data.primary_attribute === "all" ? "universal" : "intelligence"
    const totalShapes = 3
    const boxes = Array.from({ length: totalShapes }, (_, index) => index < data.complexity);
    return (
        <div className={classes["heroContainer"]}>
            <div className={classes["dash"]}>
                
            </div>
            <div className={`${classes["heroVideo"]} ${classes["alchemist"]}`}>
                <video className={classes["bigVideo"]} autoPlay loop muted>
                    <source src={`/assets/hero_giffs/${data.name}.webm`}></source>
                </video>

            </div>
            <div className={`${classes["blackish"]} ${classes["moveAway"]}`}>
                <div className="blacktransition" style={{background: "linear-gradient(rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.733) 100%, rgb(0, 0, 0) 100%)"}}></div>
            </div>

            <div className={classes["heroDescription"]}>
                <div className={classes["attribute"]}>
                    <img src={`/assets/icons/hero_${attr}.png`} alt="" className={classes["atr"]}></img>
                    <div className={classes["type"]}>{attr}</div>
                </div>
                <div className={classes["name"]}>
                    {data.name}
                </div>
                <div className={classes["short"]}>{data.short_desc}</div>
                <div className={classes["long"]}>{data.long_desc}</div>

                <div>
                    <div className={classes["attackType"]}>Attack Type</div>
                    <div className={classes["typeIcon"]}>
                        <img src="/assets/icons/melee.svg" alt="" className={classes["attackIcon"]}></img>
                        <div className={classes["attackName"]}>{data.attack_type}</div>
                    </div>
                </div>
                <div>
                    <div className={classes["complexityText"]}>Complexity</div>
                    <div className={classes["complexityIcons"]}>
                        {boxes.map((isWhite, index) => (
                            <div key={index} className={`${classes.squares} ${isWhite ? classes.white : ''}`}> 

                            </div>
                        ))}
                    </div>
                </div>
            </div>

           
            <div className={classes["abilitiesContainer"]}>
                <div className={classes["abilityLabel"]}>Abilities</div>
                <div className={classes["abilities"]}>
                    <div className={classes["abilityIcons"]}>
                        <img src="/assets/icons/talents.svg" alt=""></img>
                    </div>
                    <div className={classes["abilityIcons"]}>
                        <img src="/assets/icons/innate_icon.png" alt=""></img>
                    </div>
                    <div className={classes["abilityIcons"]}>
                        <img src={`/assets/abilities_images/${data.name}_${abilities[0].name.split(" ").join("_")}.png`} alt=""></img>
                    </div>
                    <div className={classes["abilityIcons"]}>
                        <img src={`/assets/abilities_images/${data.name}_${abilities[1].name.split(" ").join("_")}.png`} alt=""></img>
                    </div>
                    <div className={classes["abilityIcons"]}>
                        <img src={`/assets/abilities_images/${data.name}_${abilities[2].name.split(" ").join("_")}.png`} alt=""></img>
                    </div>
                    <div className={classes["abilityIcons"]}>
                        <img src={`/assets/abilities_images/${data.name}_${abilities[3].name.split(" ").join("_")}.png`} alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    );
}