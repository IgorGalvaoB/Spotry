
import SpotifyPlayer from 'react-spotify-web-playback'
import './Player.css'

export const Player = ({id,callback}) => {
    
  
    return (
        //useContext
        <div className='player'>
        <SpotifyPlayer token={localStorage.getItem("access_token_spotry")}
        uris={[`spotify:album:5ht7ItJgpBH7W6vJ5BqpPr`]}
        styles={{
            activeColor: 'blue',
            bgColor:'rgb(32, 32, 32)',
            color: 'white',
            loaderColor: '#fff',
            sliderColor: '#1cb954',
            trackArtistColor: 'white',
            trackNameColor: 'white',
            height:'70px'

          }}
        callback={callback}
          >
        
        </SpotifyPlayer>
        </div>
    )
}