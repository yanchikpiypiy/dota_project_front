import classes from "../assets/Hero.module.css"
export default function AttributeRow({attribute,base,gain}){
    return (
        <div className={classes["attributeDetail"]}>
            <img src={`/assets/icons/hero_${attribute}.png`} className={classes["smallAttribute"]} alt=""></img>
            <div className={classes["attributeStat"]}>{base}</div>
            <div className={classes["attributeGain"]}>{`+${gain}`}</div>
        </div>
    );
}