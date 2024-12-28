import classes from "../public/css/Hero.module.css"
export default function HeroStatsContainer(){
    return (
        <div className={classes["blackBackground"]}>
            <div className={classes["detailsContainer"]}>
                <div className={classes["leftPart"]}>
                    <div className={classes["attributes"]}>
                        <div className={classes["heroImage"]}>
                            <img src="/assets/proper_images/alchemist.png" className={classes["smallImage"]} alt=""></img>
                            <div className={classes["healthBar"]}>
                                <div className={classes["barText"]}>656</div>
                                <div className={classes["healthGain"]}>
                                    +2.5
                                </div>
                            </div>
                            <div className={classes["manaBar"]}>
                                <div className={classes["barText"]}>
                                    375
                                </div>
                                <div className={classes["manaGain"]}>
                                    +1.3
                                </div>
                            </div>
                        </div>
                        <div className={classes["attributeDetails"]}>
                            <div className={classes["attributeDetail"]}>
                                <img src="/assets/icons/hero_strength.png" className={classes["smallAttribute"]} alt=""></img>
                                <div className={classes["attributeStat"]}>23</div>
                                <div className={classes["attributeGain"]}>+2.7</div>
                            </div>
                            <div className={classes["attributeDetail"]}>
                                <img src="/assets/icons/hero_agility.png" className={classes["smallAttribute"]} alt=""></img>
                                <div className={classes["attributeStat"]}>22</div>
                                <div className={classes["attributeGain"]}>+1.5</div>
                            </div>
                            <div className={classes["attributeDetail"]}>
                                <img src="/assets/icons/hero_intelligence.png" className={classes["smallAattribute"]} alt=""></img>
                                <div className={classes["attributeStat"]}>25</div>
                                <div className={classes["attributeGain"]}>+1.8</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes["bottomText"]}>Attributes</div>
                </div>
                <div className={classes["separator"]}></div>
                <div className={classes["middlePart"]}>
                    <div className={classes["roles"]}>
                        <div className={classes["role"]}>
                            <div className={classes["roleName"]}>Carry</div>
                            <div className={classes["roleBar"]}>
                                <div className={classes["blackBar"]}></div>
                                <div className={classes["whitePercantage"]} style={{width: "66.6%"}}></div>
                            </div>
                        </div>
                        <div className={classes["role"]}>
                            <div className={classes["roleName"]}>Support</div>
                            <div className={classes["roleBar"]}>
                                <div className={classes["blackBar"]}></div>
                                <div className={classes["whitePercantage"]} style={{width: "33.3%"}}></div>
                            </div>
                        </div>
                        <div className={classes["role"]}>
                            <div className={classes["roleName"]}>Nuker</div>
                            <div className={classes["roleBar"]}>
                                <div className={classes["blackBar"]}></div>
                                <div className={classes["whitePercantage"]} style={{width: "33.3%"}}></div>
                            </div>
                        </div>
                        <div className={classes["role"]}>
                            <div className={classes["roleName"]}>Disabler</div>
                            <div className={classes["roleBar"]}>
                                <div className={classes["blackBar"]}></div>
                                <div className={classes["whitePercantage"]} style={{width: "33.3%"}}></div>
                            </div>
                        </div>
                        <div className={classes["role"]}>
                            <div className={classes["roleName"]}>Jungler</div>
                            <div className={classes["roleBar"]}>
                                <div className={classes["blackBar"]}></div>
                                <div className={classes["whitePercantage"]} style={{width: "0%"}}></div>
                            </div>
                        </div>

                        <div className={classes["role"]}>
                            <div className={classes["roleName"]}>Durable</div>
                            <div className={classes["roleBar"]}>
                                <div className={classes["blackBar"]}></div>
                                <div className={classes["whitePercantage"]} style={{width: "66.6%"}}></div>
                            </div>
                        </div>
                        <div className={classes["role"]}>
                            <div className={classes["roleName"]}>Escape</div>
                            <div className={classes["roleBar"]}>
                                <div className={classes["blackBar"]}></div>
                                <div className={classes["whitePercantage"]} style={{width: "0%"}}></div>
                            </div>
                        </div>
                        <div className={classes["role"]}>
                            <div className={classes["roleName"]}>Pusher</div>
                            <div className={classes["roleBar"]}>
                                <div className={classes["blackBar"]}></div>
                                <div className={classes["whitePercantage"]} style={{width: "0%"}}></div>
                            </div>
                        </div>
                        <div className={classes["role"]}>
                            <div className={classes["roleName"]}>Innitiator</div>
                            <div className={classes["roleBar"]}>
                                <div className={classes["blackBar"]}></div>
                                <div className={classes["whitePercantage"]} style={{width: "33.3%"}}></div>
                            </div>
                        </div>
                    </div>
                    <div className={classes["bottomText"]}>Roles</div>
                </div>
                <div className={classes["separator"]}></div>
                <div className={classes["rightPart"]}>
                    <div className={classes["stats"]}>
                        <div className={classes["statColumn"]}>
                            <div className={classes["topText"]}>Attack</div>
                            <div className={classes["stat"]}>
                                <img src="/assets/stats/icon_damage.png" className={classes["statImage"]} alt=""></img>
                                50-56
                            </div>
                            <div className={classes["stat"]}>
                                <img src="/assets/stats/icon_attack_time.png" className={classes["statImage"]} alt=""></img>
                                1.7
                            </div>
                            <div className={classes["stat"]}>
                                <img src="/assets/stats/icon_attack_range.png" className={classes["statImage"]} alt=""></img>
                                150
                            </div>
                            <div className={classes["stat"]}>
                                <img src="/assets/stats/icon_projectile_speed.png" className={classes["statImage"]} alt=""></img>
                                900
                            </div>
                        </div>
                        
                        <div className={classes["statColumn"]}>
                            <div className={classes["topText"]}>Defense</div>
                            <div className={classes["stat"]}>
                                <img src="/assets/stats/icon_armor.png" className={classes["statImage"]} alt=""></img>
                                3.7
                            </div>
                            <div className={classes["stat"]}>
                                <img src="/assets/stats/icon_magic_resist.png" className={classes["statImage"]} alt=""></img>
                                25%
                            </div>
                        </div>
                        <div className={classes["statColumn"]}>
                            <div className={classes["topText"]}>Mobility</div>
                            <div className={classes["stat"]}>
                                <img src="/assets/stats/icon_movement_speed.png" className={classes["statImage"]} alt=""></img>
                                295
                            </div>
                            <div className={classes["stat"]}>
                                <img src="/assets/stats/icon_turn_rate.png" className={classes["statImage"]} alt=""></img>
                                0.6
                            </div>
                            <div className={classes["stat"]}>
                                <img src="/assets/stats/icon_vision.png" className={classes["statImage"]} alt=""></img>
                                1800 / 800
                            </div>
                        </div>
                    </div>
                    <div className={classes["bottomText"]}>stats</div>
                </div>
            </div>
        </div>
    );
}