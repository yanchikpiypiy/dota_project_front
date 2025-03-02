import '../../App.css';
import Background from './Background';
import Header from '../Header';
import Construction from './Construction';
export default function Main(){
    return(
        <div className="App">
            <Header> </Header>
            <div className="info-container">
                <Background> </Background>
                <div className="info">
                <h1>"DOTA 2 IMPROVED WEBPAGE PROJECT."</h1>
                <h2>- Yan Chervonyi</h2>
                </div>
                <div className="bla"></div>
            </div>
            <Construction></Construction>
        </div>
    )
}