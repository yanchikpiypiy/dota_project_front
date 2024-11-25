import radiantDireImage from '../assets/radiant_dire5.jpg';
export default function Construction(){
    return(
        <div className="under-consturction">
        <div className="bla1"></div>
        <div className="img-container">
          <img src={radiantDireImage} alt="Radiant vs Dire" />
        </div>
        <div className="text">
          <h1>"UNDER CONSTRUCTION"</h1>
          <h2>:))</h2>
        </div>
      </div>
    )
}