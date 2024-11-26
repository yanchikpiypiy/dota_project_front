import '../App.css';

export default function Header(){
    return(
        <div className="header-container">
            <div className="dota-icon">
                <a href="/bla" className="icon"></a>
            </div>
            <div className="group link">
                <a href="#">Game</a>
                <a href="/heroes">Heroes</a>
                <a href="#">News</a>
                <a href="#">Esports</a>
            </div>
            <div className="link">
                <a href="#">Login</a>
            </div>
        </div>
    )
}