import './Cards.css'


export const Music = ({ name, image,id, artists }) => {
  const arts = artists || []
  const nameArtists = arts.map(artist=>artist.name).join(', ')
  return (
    <div className="music">
      <img
        src = {image}
        alt="album image"
      />
  
      <h3>{name}</h3>
      <h6>{nameArtists}</h6>
    </div>
  )
}

