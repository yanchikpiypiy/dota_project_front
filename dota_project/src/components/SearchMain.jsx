import classes from "../public/css/Search.module.css";
export default function SearchMain() {
  return (
    <div className={classes["content-container"]}>
      <div className={classes["header-container"]}>
        <div className={classes["dota-icon"]}>
          <a href="/" className={classes.icon}></a>
        </div>
        <div className={`${classes.group} ${classes.link}`}>
          <a href="">Game</a>
          <a href="">Heroes</a>
          <a href="">News</a>
          <a href="">Esports</a>
        </div>
        <div className={classes.link}>
          <a href=""> Login </a>
        </div>
      </div>

      <div className={classes.description}>
        <div className={classes.header}>
          <h3> Choose your hero</h3>
        </div>
        <div className={classes.textick}>
          From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero pool
          is massive and limitlessly diverse. Unleash incredible abilities and devastating
          ultimates on your way to victory.
        </div>
      </div>
      <div className={classes["filter-bar"]}>
        <div className={classes.txt}>Filter heroes</div>
        <div className={classes.attributes}>
          <div className={classes.text}>Attribute</div>
          <div
            className={classes.attribute}
            style={{ backgroundImage: "url(/assets/icons/filter-str-active.png)" }}
          ></div>
          <div
            className={classes.attribute}
            style={{ backgroundImage: "url(/assets/icons/filter-agi-active.png)" }}
          ></div>
          <div
            className={classes.attribute}
            style={{ backgroundImage: "url(/assets/icons/filter-int-active.png)" }}
          ></div>
          <div
            className={classes.attribute}
            style={{ backgroundImage: "url(/assets/icons/filter-uni-active.png)" }}
          ></div>
        </div>
        <div className={classes.complexity}>
          <div className={classes.text}>Complexity</div>
          <div
            className={classes.attribute}
            style={{ backgroundImage: "url(/assets/icons/filter-diamond.png)" }}
          ></div>
          <div
            className={classes.attribute}
            style={{ backgroundImage: "url(/assets/icons/filter-diamond.png)" }}
          ></div>
          <div
            className={classes.attribute}
            style={{ backgroundImage: "url(/assets/icons/filter-diamond.png)" }}
          ></div>
        </div>
        <div className={classes["input-search"]}>
          <div
            className={classes["search-icon"]}
            style={{ backgroundImage: "url(/assets/icons/search.svg)" }}
          ></div>
          <div>
            <input type="text" name="" id=""></input>
          </div>
        </div>
      </div>

      <div className={classes["heroes-list"]}>
        <a
          href=""
          className={classes["hero-box"]}
          style={{
            backgroundImage: "url(/assets/proper_images/abaddon.png)",
            left: "calc(0% + 0px)",
            top: "calc(0px)",
          }}
        >
          <div className={classes["hero-popup"]}>
            <img
              src="/assets/icons/hero_universal.png"
              alt=""
              className={classes["hero-icon"]}
            ></img>
            <div className={classes["hero-text"]}>abaddon</div>
          </div>
        </a>
        <a
          href=""
          className={classes["hero-box"]}
          style={{
            backgroundImage: "url(/assets/proper_images/alchemist.png)",
            left: "calc(25% - 56.25px)",
            top: "calc(0px)",
          }}
        >
          <div className={classes["hero-popup"]}>
            <img
              src="assets/icons/hero_agility.png"
              alt=""
              className={classes["hero-icon"]}
            ></img>
            <div className={classes["hero-text"]}>alchemist</div>
          </div>
        </a>
        <a
          href=""
          className={classes["hero-box"]}
          style={{
            backgroundImage: "url(/assets/proper_images/antimage.png)",
            left: "calc(50% - 112.50px)",
            top: "calc(0px)",
          }}
        >
          <div className={classes["hero-popup"]}>
            <img
              src="assets/icons/hero_agility.png"
              alt=""
              className={classes["hero-icon"]}
            ></img>
            <div className={classes["hero-text"]}>antimage</div>
          </div>
        </a>
        <a
          href=""
          className={classes["hero-box"]}
          style={{
            backgroundImage: "url(assets/proper_images/arc_warden.png)",
            left: "calc(75% - 168.75px)",
            top: "calc(0px)",
          }}
        >
          <div className={classes["hero-popup"]}>
            <img
              src="assets/icons/hero_agility.png"
              alt=""
              className={classes["hero-icon"]}
            ></img>
            <div className={classes["hero-text"]}>arc_warden</div>
          </div>
        </a>
      </div>
    </div>
  );
}
