import Header from "../Header";
import classes from "./assets/Hero.module.css"
import HeroContainer from "./HeroContainer";
import HeroStatsContainer from "./HeroStatsContainer";
import HeroAbilities from "./HeroAbilities";
import HeroDotaContextProvider from "./contexts/HeroShortDataContext";
export default function HeroMainPage(){
    return (
        <div className={classes["container"]}>
            <HeroDotaContextProvider>
                <Header></Header>
                <HeroContainer></HeroContainer>
                <HeroStatsContainer></HeroStatsContainer>
                <HeroAbilities></HeroAbilities>
            </HeroDotaContextProvider>
            
        </div>
    );
}