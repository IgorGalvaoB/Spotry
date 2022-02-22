//COMPONENTE QUE ORGANIZA A DEMONSTRAÇÃO DAS CARTAS DE MUSICA
import { ArtistTitle } from './ArtistTitle'

import './Cards.css'
import play from '../../images/play-music.svg'
import APIRendler from '../../Classes/apiRendler'

export const Music = ({ name, image,id, artists ,duration_ms,index}) => {
  const api = new APIRendler()
  const playMusic =()=>{
    api.playMusic()
  }

  const msToTime =  (s)=> {

    // Pad to 2 or 3 digits, default is 2
    const pad=(n, z)=> {
      z = z || 2;
      return ('00' + n).slice(-z);
    }
  
    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;
    s = (s - mins)/60;
    let hours = s %60;
  
    return hours?pad(hours) +':'+ pad(mins) + ':' + pad(secs):pad(mins) + ':' + pad(secs)
  }
  const time = msToTime(Number(duration_ms))
  return (
    <div onClick={playMusic} className="music">
      <div  className='music-index'>
        <h4>{index+1}</h4>
      </div>
      <div className='play-music-div'>
        <img src={play} alt="play"/>
      </div>
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

