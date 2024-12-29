import classes from "../assets/Hero.module.css"
export default function RoleRow({role, value}){
    return (
        <div className={classes["role"]}>
            <div className={classes["roleName"]}>{role}</div>
            <div className={classes["roleBar"]}>
                <div className={classes["blackBar"]}></div>
                <div className={classes["whitePercantage"]} style={{width: `${value*33.3}%`}}></div>
            </div>
        </div>
    );

}