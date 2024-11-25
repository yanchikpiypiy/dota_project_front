import './App.css';
import Construction from './components/Construction';
import Header from './components/Header';
import Background from './components/Background';
function App() {
  return (
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
  );
}

export default App;
