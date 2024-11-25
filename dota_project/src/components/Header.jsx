import '../App.css';

export default function Header(){
    return(
        <div className="header-container">
            <div className="dota-icon">
                <a href="/bla" className="icon"></a>
                {/* <img src={dotaLogo} alt="Dota 2 Logo" /> */}
            </div>
            <div className="group link">
                <a href="#">Game</a>
                <a href="#">Heroes</a>
                <a href="#">News</a>
                <a href="#">Esports</a>
            </div>
            <div className="link">
                <a href="#">Login</a>
            </div>
        </div>
    )
}