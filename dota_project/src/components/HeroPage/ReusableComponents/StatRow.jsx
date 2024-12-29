import classes from "../assets/Hero.module.css"
export default function StatRow({name,value}){
    return (
        <div className={classes["stat"]}>
            <img src={`/assets/stats/icon_${name}.png`} className={classes["statImage"]} alt=""></img>
            {value}
        </div>
    );
}