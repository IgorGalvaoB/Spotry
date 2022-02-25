//COMPONENTE QUE ORGANIZA A DEMONSTRAÇÃO DAS CARTAS DE MUSICA
import { ArtistTitle } from './ArtistTitle'
import addSimbol from '../../images/addSimbol.png'
import './Cards.css'
import play from '../../images/play-music.svg'
import APIRendler from '../../Classes/apiRendler'

export const Music = ({ name, image, id, artists, duration_ms, index, func_player ,album_id}) => {
  const api = new APIRendler()

  const playTrack = () => {
    if (window.location.pathname === '/album/') {
      const api = new APIRendler()
      api.playMusic(album_id,index)
      return

    }

    func_player([`spotify:track:${id}`])
  }
  const addTrack = () => {
    api.addTrack(id)
  }
  const msToTime = (s) => {
    // Pad to 2 or 3 digits, default is 2
    const pad = (n, z) => {
      z = z || 2;
      return ('00' + n).slice(-z);
    }
    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;
    s = (s - mins) / 60;
    let hours = s % 60;
    return hours ? pad(hours) + ':' + pad(mins) + ':' + pad(secs) : pad(mins) + ':' + pad(secs)
  }

  const time = msToTime(Number(duration_ms))
  return (
    <div className='container-track-card'>
      <div onClick={playTrack}className='track-player'>

        <div className='track-play-img'>
          <img src={play} alt="play" />
        </div>
        <div className='track-index'>
          <h4>{index + 1}</h4>
        </div>
        {image&&<img src={image} alt="album" className='track-image'/>}
        <div className='track-info'>

          <h4>{name}</h4>
          <ArtistTitle artists={artists} />
        </div>
      </div>

      <div className='time-add'>
        <h4>{time}</h4>
        <img onClick={addTrack} src={addSimbol} alt="add-track" className='add-simbol' />
      </div>

    </div>
  )
}

