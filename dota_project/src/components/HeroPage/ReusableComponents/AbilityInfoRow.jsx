import classes from "../assets/Hero.module.css"
export default function AbilityInfoRow({labelText,value}){
    return(
    <div className={classes["generalRow"]}>
        {labelText}
        <div className={classes["rowValue"]}>{value}</div>
    </div>
    );
}