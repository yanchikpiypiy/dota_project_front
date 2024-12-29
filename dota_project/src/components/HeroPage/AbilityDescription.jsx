import classes from "./assets/Hero.module.css"
import AbilityInfoRow from "./ReusableComponents/AbilityInfoRow";
export default function AbilityDescription({item,name}){
    const heroname = name.split(" ").join("_").replace(/'/g, "%27");
    const abilityname = item.name.split(" ").join("_").replace(/'/g, "%27");
    const image_name = heroname+"_"+abilityname
    console.log(item)
    return (
        <div className={classes["spellDescription"]}>
            <div className={classes["topHalf"]}>
                <img className={classes["bigSpell"]} src={`/assets/abilities_images/${image_name}.png`} alt=""></img>
                <div className={classes["textBlock"]}>
                    <div className={classes["spellName"]}>{item.name}</div>
                    <div className={classes["spellInfo"]}>{item.description}</div>
                </div>
            </div>
            <div className={classes["bottomHalf"]}>
                <div className={classes["spellGeneral"]}>
                    <div className={classes["generalCol"]}>
                        <div className={classes["generalRow"]}>
                            Ability:
                            <div className={classes["rowValue"]}>{item.general_details["Ability:"]}</div>
                        </div>
                        {item.general_details["Affects:"] && (
                            <div className={classes["generalRow"]}>
                            Affects:
                            <div className={classes["rowValue"]}>{item.general_details["Affects:"]}
                            </div>
                        </div>
                        )}
                        {item.general_details["Damage type:"] && (
                            <div className={classes["generalRow"]}>
                                DAMAGE TYPE:
                                <div className={`${classes["rowValue"]} ${classes["red"]}`}>
                                    {item.general_details["Damage type:"]}
                                </div>
                            </div>
                        )}
                    </div> 
                    <div className={classes["generalCol"]}>
                        <div className={classes["generalRow"]}>
                            PIERCES SPELL IMUNITY:
                            <div className={classes["rowValue"]}>No</div>
                        </div>

                        {item.general_details["Dispellable:"] && (
                        <div className={classes["generalRow"]}>
                            DISPELLABLE:
                            <div className={classes["rowValue"]}>{item.general_details["Dispellable:"]}</div>
                        </div>
                        )}
                    </div>
                </div>
                <div className={classes["spellSpecifics"]}>

                    {Object.entries(item.specific_details).map(([key,value]) => (
                        <AbilityInfoRow key={key} labelText={key} value={value}></AbilityInfoRow>
                    ))}
                    {/* <div className={classes["generalRow"]}>
                        RADIUS:
                        <div className={classes["rowValue"]}>400 / 475 / 550 / 625</div>
                    </div>
                    <div className={classes["generalRow"]}>
                        DURATION
                        <div className={classes["rowValue"]}>15</div>
                    </div>
                    <div className={classes["generalRow"]}>
                        DAMAGE PER SECOND:
                        <div className={classes["rowValue"]}>25 / 30 / 35 / 40</div>
                    </div>
                    <div className={classes["generalRow"]}>
                        ARMOR REDUCTION
                        <div className={classes["rowValue"]}>3 / 4 / 5 / 6</div>
                    </div>
                     */}
                </div>

                <div className={classes["spellDetails"]}>
                    <div className={classes["spellDetail"]}>
                        <div className={classes["coolDownIcon"]} style={{backgroundImage: "url('/assets/icons/cooldown.png')"}}></div>
                        <div className={classes["coolDown"]}>{item.cooldown}</div>
                    </div>
                    <div className={classes["spellDetail"]}>
                        <div className={classes["manaIcon"]}></div>
                        <div className={classes["manaText"]}>{item.mana_cost}</div>
                    </div> 
                </div>
            </div>
        </div>
    );
}