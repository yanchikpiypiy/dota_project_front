import classes from "../public/css/Search.module.css";
export default function HeroCard({attribute, name,properName, num, index}){
  return (
    <a
          href={`/hero/${properName}`}
          className={classes["hero-box"]}
          style={{
            backgroundImage: `url(/assets/proper_images/${name}.png)`,
            // /assets/proper_images/abaddon.png
            left: `calc(${25*(index % 5)}% - ${(index % 5) * 56.25}px)`,
            top: `calc(${num}px)`,
          }}
        >
          <div className={classes["hero-popup"]}>
            <img
              src={`/assets/icons/hero_${attribute}.png`}
            //   "/assets/icons/hero_universal.png"
              alt=""
              className={classes["hero-icon"]}
            ></img>
            <div className={classes["hero-text"]}>{properName}</div>
          </div>
        </a>
  )
    
}