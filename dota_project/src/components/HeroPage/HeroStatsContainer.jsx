import classes from "./assets/Hero.module.css"
import { useContext } from "react";
import { HeroDotaContext } from "./contexts/HeroShortDataContext";
import AttributeRow from "./ReusableComponents/AttributeRow";
import RoleRow from "./ReusableComponents/RoleRow";
import StatRow from "./ReusableComponents/StatRow";
export default function HeroStatsContainer(){
    const {data} = useContext(HeroDotaContext)
    return (
        <div className={classes["blackBackground"]}>
            <div className={classes["detailsContainer"]}>
                <div className={classes["leftPart"]}>
                    <div className={classes["attributes"]}>
                        <div className={classes["heroImage"]}>
                            <img src={`/assets/proper_images/${data.name.split(" ").join("_").replace(/'/g, "")}.png`} className={classes["smallImage"]} alt=""></img>
                            <div className={classes["healthBar"]}>
                                <div className={classes["barText"]}>{data.baseHealth}</div>
                                <div className={classes["healthGain"]}>
                                    {`+${data.healthGain}`}
                                </div>
                            </div>
                            <div className={classes["manaBar"]}>
                                <div className={classes["barText"]}>
                                    {data.baseMana}
                                </div>
                                <div className={classes["manaGain"]}>
                                {`+${data.manaGain}`}
                                </div>
                            </div>
                        </div>
                        <div className={classes["attributeDetails"]}>
                            <AttributeRow attribute={"strength"} base={data.base_str} gain={data.str_gain}></AttributeRow>
                            <AttributeRow attribute={"agility"} base={data.base_agi} gain={data.agi_gain}></AttributeRow>
                            <AttributeRow attribute={"intelligence"} base={data.base_int} gain={data.int_gain}></AttributeRow>
                        </div>
                    </div>
                    <div className={classes["bottomText"]}>Attributes</div>
                </div>
                <div className={classes["separator"]}></div>
                <div className={classes["middlePart"]}>
                    <div className={classes["roles"]}>
                        <RoleRow role={"Carry"} value={data.roles.Carry}></RoleRow>
                        <RoleRow role={"Support"} value={data.roles.Support}></RoleRow>
                        <RoleRow role={"Nuker"} value={data.roles.Nuker}></RoleRow>
                        <RoleRow role={"Disabler"} value={data.roles.Disabler}></RoleRow>
                        <RoleRow role={"Jungler"} value={data.roles.Jungler}></RoleRow>
                        <RoleRow role={"Durable"} value={data.roles.Durable}></RoleRow>
                        <RoleRow role={"Escape"} value={data.roles.Escape}></RoleRow>
                        <RoleRow role={"Pusher"} value={data.roles.Pusher}></RoleRow>
                        <RoleRow role={"Initiator"} value={data.roles.Initiator}></RoleRow>
                    </div>
                    <div className={classes["bottomText"]}>Roles</div>
                </div>
                <div className={classes["separator"]}></div>
                <div className={classes["rightPart"]}>
                    <div className={classes["stats"]}>
                        <div className={classes["statColumn"]}>
                            <div className={classes["topText"]}>Attack</div>
                            <StatRow name="damage" value={data.baseDmg}></StatRow>
                            <StatRow name="attack_time" value={data.attackTime}></StatRow>
                            <StatRow name="attack_range" value={data.attackRange}></StatRow>
                            <StatRow name="projectile_speed" value={data.projectileSpeed}></StatRow>
                        </div>
                        
                        <div className={classes["statColumn"]}>
                            <div className={classes["topText"]}>Defense</div>
                            <StatRow name="armor" value={data.baseArmor}></StatRow>
                            <StatRow name="magic_resist" value={data.magicResist}></StatRow>
                        </div>
                        <div className={classes["statColumn"]}>
                            <div className={classes["topText"]}>Mobility</div>
                            <StatRow name="movement_speed" value={data.moveSpeed}></StatRow>
                            <StatRow name="turn_rate" value={data.turnRate}></StatRow>
                            <StatRow name="vision" value={data.vision}></StatRow>
                        </div>
                    </div>
                    <div className={classes["bottomText"]}>stats</div>
                </div>
            </div>
        </div>
    );
}