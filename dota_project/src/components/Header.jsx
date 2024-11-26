import classes from "../public/css/Search.module.css";

export default function Header(){
    return(
        <div className={classes["header-container"]}>
            <div className={classes["dota-icon"]}>
                <a href="/" className={classes.icon}></a>
            </div>
            <div className={`${classes.group} ${classes.link}`}>
                <a href="">Game</a>
                <a href="/heroes">Heroes</a>
                <a href="">News</a>
                <a href="">Esports</a>
            </div>
            <div className={classes.link}>
                <a href=""> Login </a>
            </div>
      </div>
    )
}