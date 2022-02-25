
import SpotifyPlayer from 'react-spotify-web-playback'
import './Player.css'

export const Player = ({player}) => {
    
    
    return (
        //useContext
        <div className='player'>
        <SpotifyPlayer token={localStorage.getItem("access_token_spotry")}
        play= {true}
        autoPlay = {true}
        uris = {player}
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
        
          >
        
        </SpotifyPlayer>
        </div>
    )
}