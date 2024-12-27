import Header from "./Header";
import classes from "../public/css/Hero.module.css"
import HeroContainer from "./HeroContainer";
export default function HeroMainPage(){
    return (
        <div className={classes["container"]}>
            <Header></Header>
            <HeroContainer></HeroContainer>
        </div>
    );
}