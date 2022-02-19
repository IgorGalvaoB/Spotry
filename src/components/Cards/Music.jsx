import { ArtistTitle } from './ArtistTitle'
import './Cards.css'


export const Music = ({ name, image,id, artists }) => {
  
  return (
    <div className="music">
      <img
        src = {image}
        alt="album image"
      />
  
      <h3>{name}</h3>
      <ArtistTitle artists = {artists}/>

    </div>
  )
}

