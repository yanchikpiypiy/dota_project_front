import classes from "../assets/Hero.module.css"

export default function IconSpell({active,heroname,abilityname, handleClick}){
    heroname = heroname.split(" ").join("_").replace(/'/g, "%27");
    abilityname = abilityname.split(" ").join("_").replace(/'/g, "%27");
    const image_name = heroname+"_"+abilityname
    return(
    <div className={`${classes["spell"]} ${active ? classes["Active"] : classes["notActive"]}`}  style={{backgroundImage: `url('/assets/abilities_images/${image_name}.png')`}} onClick={handleClick}></div>

    );
}