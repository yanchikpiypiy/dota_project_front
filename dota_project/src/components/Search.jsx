
import classes from "../assets/css/Search.module.css"
export default function SearchMain(){
    return (
        <div class="content-container">
            <div class="header-container">
                
                <div class="dota-icon">
                    <a href="" class="icon"></a>
                    <img src="./assets/dota2_logo_symbol.png" alt=""></img>
                </div>
                <div class="group link">
                    <a href="">Game</a>
                    <a href="">Heroes</a>
                    <a href="">News</a>
                    <a href="">Esports</a>
                </div>
                <div class="link"> 
                    <a href=""> Login </a>
                </div>
            </div>

            <div class="description">
                <div class="header">
                    <h3> Choose your hero</h3>
                </div>
                <div class="textick">
                    From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero pool 
                    is massive and limitlessly diverse. Unleash incredible abilities and devastating 
                    ultimates on your way to victory.
                </div>
            </div>
            <div class="filter-bar">
                <div class="txt">
                    Filtter heroes
                </div>
                <div class="attributes">
                    <div class="text"> Atributte </div>
                    <div class="attribute" 
                    style="background-image: url('../assets/icons/filter-str-active.png')"></div>
                    <div class="attribute" 
                    style="background-image: url('../assets/icons/filter-agi-active.png')"></div>
                    <div class="attribute"
                    style="background-image: url('../assets/icons/filter-int-active.png')"></div>
                    <div class="attribute" 
                    style="background-image: url('../assets/icons/filter-uni-active.png')"></div>
                </div>
                <div class="complexity">
                    <div class="text"> Complexity </div>
                    <div class="attribute" 
                    style="background-image: url('../assets/icons/filter-diamond.png')"></div>
                    <div class="attribute" 
                    style="background-image: url('../assets/icons/filter-diamond.png')"></div>
                    <div class="attribute" 
                    style="background-image: url('../assets/icons/filter-diamond.png')"></div>
                </div>
                <div class="input-search">
                    <div class="search-icon"
                    style="background-image: url('../assets/icons/search.svg')"></div>
                    <div>
                        <input type="text" name="" id=""></input>
                    </div>
                </div>
            </div>
            <div class="heroes-list">
                <a href="" class="hero-box" style="
                background-image: url('../assets/proper_images/abaddon.png'); 
                left: calc(0% + 0px);
                top: calc(0px);">
                    <div class="hero-popup">
                        <img src="./assets/icons/hero_universal.png" alt="" class="hero-icon"></img>
                        <div class="hero-text">
                            abaddon
                        </div>
                    </div>
                
                </a>
                <a href="" class="hero-box" style="
                background-image: url('../assets/proper_images/alchemist.png'); 
                left: calc(25% - 56.25px);
                top: calc(0px);">
                    <div class="hero-popup">
                        <img src="./assets/icons/hero_agility.png" alt="" class="hero-icon"></img>
                        <div class="hero-text">
                            abaddon
                        </div>
                    </div>
                
                </a>
                <a href="" class="hero-box" style="
                background-image: url('../assets/proper_images/antimage.png'); 
                left: calc(50% - 112.50px);
                top: calc(0px);">
                    <div class="hero-popup">
                        <img src="./assets/icons/hero_agility.png" alt="" class="hero-icon"></img>
                        <div class="hero-text">
                            abaddon
                        </div>
                    </div>
                
                </a>
                <a href="" class="hero-box" style="
                background-image: url('../assets/proper_images/arc_warden.png'); 
                left: calc(75% - 168.75px);
                top: calc(0px);">
                    <div class="hero-popup">
                        <img src="./assets/icons/hero_agility.png" alt="" class="hero-icon"></img>
                        <div class="hero-text">
                            abaddon
                        </div>
                    </div>
                
                </a>
            </div>
    </div>
    )
}