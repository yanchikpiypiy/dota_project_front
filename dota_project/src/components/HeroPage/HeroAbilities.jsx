import classes from "./assets/Hero.module.css"
export default function HeroAbilities(){
    return (
        <div className={classes["bottomContainer"]}>
            <div className={classes["nightmare"]}>
                <div className={classes["topLabel"]}>

                </div>
                <div className={classes["spells"]}>
                    <div className={classes["spellAssets"]}>
                        <div className={classes["videoBox"]}>
                            <video autoPlay loop muted className={classes["spellVideo"]}>
                                <source src="/assets/videos/alchemist_acid_spray.webm"></source>
                            </video>
                        </div>
                        <div className={classes["spellBar"]}>
                            <div className={classes["spell"]}  style={{backgroundImage: "url('/assets/abilities_images/Alchemist_Acid_Spray.png')"}}></div>
                            <div className={`${classes["spell"]} ${classes["notActive"]}`}  style={{backgroundImage: "url('/assets/abilities_images/Alchemist_Berserk_Potion.png')"}}></div>
                            <div className={`${classes["spell"]} ${classes["notActive"]}`}  style={{backgroundImage: "url('/assets/abilities_images/Alchemist_Chemical_Rage.png')"}}></div>
                            <div className={`${classes["spell"]} ${classes["notActive"]}`}  style={{backgroundImage: "url('/assets/abilities_images/Alchemist_Corrosive_Weaponry.png')"}}></div>
                            <div className={`${classes["spell"]} ${classes["notActive"]}`}  style={{backgroundImage: "url('/assets/abilities_images/Alchemist_Unstable_Concoction.png')"}}></div>
                        </div>
                    </div>
                    <div className={classes["spellDescription"]}>
                        <div className={classes["topHalf"]}>
                            <img className={classes["bigSpell"]} src="/assets/abilities_images/Alchemist_Acid_Spray.png" alt=""></img>
                            <div className={classes["textBlock"]}>
                                <div className={classes["spellName"]}>Acid Spray</div>
                                <div className={classes["spellInfo"]}>Sprays high-pressure acid across a target area. Enemy units who step across the contaminated terrain take damage per second and have their armor reduced.</div>
                            </div>
                        </div>
                        <div className={classes["bottomHalf"]}>
                            <div className={classes["spellGeneral"]}>
                                <div className={classes["generalCol"]}>
                                    <div className={classes["generalRow"]}>
                                        Ability:
                                        <div className={classes["rowValue"]}>Point Target</div>
                                    </div>
                                    <div className={classes["generalRow"]}>
                                        DAMAGE TYPE:
                                        <div className={`${classes["rowValue"]} ${classes["red"]}`}>Physical</div>
                                    </div>
                                </div> 
                                <div className={classes["generalCol"]}>
                                    <div className={classes["generalRow"]}>
                                        PIERCES SPELL IMUNITY:
                                        <div className={classes["rowValue"]}>No</div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes["spellSpecifics"]}>
                                <div className={classes["generalRow"]}>
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
                                
                            </div>

                            <div className={classes["spellDetails"]}>
                                <div className={classes["spellDetail"]}>
                                    <div className={classes["coolDownIcon"]} style={{backgroundImage: "url('/assets/icons/cooldown.png')"}}></div>
                                    <div className={classes["coolDown"]}>22 / 21 / 20 / 19</div>
                                </div>
                                <div className={classes["spellDetail"]}>
                                    <div className={classes["manaIcon"]}></div>
                                    <div className={classes["manaText"]}>105 / 110 / 115 / 120</div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}