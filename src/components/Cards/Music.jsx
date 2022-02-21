//COMPONENTE QUE ORGANIZA A DEMONSTRAÇÃO DAS CARTAS DE MUSICA
import { ArtistTitle } from './ArtistTitle'
import './Cards.css'

export const Music = ({ name, image,id, artists ,duration_ms,explicit}) => {
  function msToTime(s) {

    // Pad to 2 or 3 digits, default is 2
    function pad(n, z) {
      z = z || 2;
      return ('00' + n).slice(-z);
    }
  
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    
  
    return pad(mins) + ':' + pad(secs);
  }
  const time = msToTime(Number(duration_ms))
  return (
    <div className="music">
      <img className='image-music'
        src = {image}
        alt="album"
      /> 
      <div className='info-music'>                              {/*ADICIONA "ONCLICK" QUE ENVIA A MÚSICA PARA A PLAYBACK NA DIV MAE*/}
        <div className='title-music'>
          <h4>{name}</h4>
          <ArtistTitle artists={artists}/>
        </div>
        <div className='time'>
          {time}
        </div>
      </div> 
    </div>
  )
}

