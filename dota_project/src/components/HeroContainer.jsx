import classes from "../public/css/Hero.module.css"
export default function HeroContainer(){
    return (
        <div className={classes["heroContainer"]}>
            <div className={classes["dash"]}>
                
            </div>
            <div className="heroVideo alchemist">
                <video className="bigVideo" autoplay loop muted>
                    <source src="./assets/hero_giffs/Alchemist.webm"> </source>
                </video>

            </div>
            <div className="blackish moveAway">
                <div className="blacktransition" style={{background: "linear-gradient(rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.733) 100%, rgb(0, 0, 0) 100%)"}}></div>
            </div>

            <div className={classes["heroDescription"]}>
                <div className={classes["attribute"]}>
                    <img src="/assets/icons/hero_strength.png" alt="" className={classes["atr"]}> </img>
                    <div className={classes["type"]}>strength</div>
                </div>
                <div className={classes["name"]}>
                    Alchemist
                </div>
                <div className={classes["short"]}>Earns extra gold from unit kills and bounty runes</div>
                <div className={classes["long"]}>Synthesizing <span className={classes["Bold"]}>extra resources</span> from each and every kill, Alchemist has no trouble gathering the tools needed to destroy his foes. Ambushing enemies with <span className={classes["Bold"]}>corrosive acid</span> and a host of <span className={classes["Bold"]}>unstable chemicals</span>, he battles to ensure his greedy escapades can remain uninterrupted.</div>

                <div>
                    <div className={classes["attackType"]}>Attack Type</div>
                    <div className={classes["typeIcon"]}>
                        <img src="/assets/icons/melee.svg" alt="" className="attack-icon"> </img>
                        <div className="attack-name">Melee</div>
                    </div>
                </div>
                <div>
                    <div className={classes["complexityText"]}>Complexity</div>
                    <div className={classes["complexityIcons"]}>
                        <div className="squares white"></div>
                        <div className="squares"></div>
                        <div className="squares"></div>
                    </div>
                </div>
            </div>

           
            <div class="abilitiesContainer">
                <div class="abilityLabel">Abilities</div>
                <div class="abilities">
                    <div class="abilityIcons">
                        <img src="/assets/icons/talents.svg" alt=""> </img>
                    </div>
                    <div class="abilityIcons">
                        <img src="/assets/icons/innate_icon.png" alt=""> </img>
                    </div>
                    <div class="abilityIcons">
                        <img src="/assets/abilities_images/Alchemist_Acid_Spray.png" alt=""> </img>
                    </div>
                    <div class="abilityIcons">
                        <img src="/assets/abilities_images/Alchemist_Berserk_Potion.png" alt=""> </img>
                    </div>
                    <div class="abilityIcons">
                        <img src="/assets/abilities_images/Alchemist_Chemical_Rage.png" alt=""> </img>
                    </div>
                    <div class="abilityIcons">
                        <img src="/assets/abilities_images/Alchemist_Corrosive_Weaponry.png" alt=""> </img>
                    </div>
                </div>
            </div>
        </div>
    );
}