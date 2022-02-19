import './Cards.css'


export const Music = ({ name, image,id }) => {
  const arts = artists || []
  const nameArtists = arts.map(artist=>artist.name).join(', ')
  return (
    <div className="music">
      <img
        src = 'https://i.scdn.co/image/ab67616d0000b273f38235b3df46fdf3a21f6a63'
        alt="album image"
      />
      <h4>{name}</h4>
      <h6>{nameArtists}</h6>
      <h3>Music Name</h3>
      <p>Artist</p>
    </div>
  )
}

