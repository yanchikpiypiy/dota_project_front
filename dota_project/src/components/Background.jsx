import '../App.css';
export default function Background(){
    return(
        <div className="video-container">
        <video autoPlay muted loop>
          <source type="video/webm" src='/assets/dota_montage_webm.webm'/>
        </video>
      </div>
    )
}