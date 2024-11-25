import '../App.css';
import dotaVideo from '../assets/dota_montage_webm.webm'
export default function Background(){
    return(
        <div className="video-container">
        <video autoPlay muted loop>
          <source type="video/webm" src={dotaVideo} />
        </video>
      </div>
    )
}