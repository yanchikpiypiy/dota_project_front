import classes from "../public/css/Search.module.css";
import { Link } from "react-router-dom";
export default function Header(){
    return(
        <div className={classes["header-container"]}>
            <div className={classes["dota-icon"]}>
                <Link to="/" className={classes.icon}></Link>
            </div>
            <div className={`${classes.group} ${classes.link}`}>
                <a href="">Game</a>
                <Link to="/heroes">Heroes</Link>
                <a href="">News</a>
                <a href="">Esports</a>
            </div>
            <div className={classes.link}>
                <a href=""> Login </a>
            </div>
      </div>
    )
}