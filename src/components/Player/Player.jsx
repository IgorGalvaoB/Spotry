import SpotifyPlayer from 'react-spotify-web-playback'
import './Player.css'
export const Player = () => {
    return (
        <div className='player'>
        <SpotifyPlayer token='BQAx67Gsfa0bj71dx7hNyHIV5aJFFpQbDBZ3-kF5KTHtmdubwwCnon0GlQLX30GZ9zLESIdoeuQ-5pctH5JTwj073EqwIjVfh4_DUPXzaXIiKQj5bTqCfzNzqOm9Of86KU9XIAcOSQWpDlSTkoNhCylTlkQyYEORfffOKiAQApWEnd1B_4oCRaWyh0iN3g8'
        uris={['spotify:album:5cnwEGGZCmPx1f3mLQK90b']}
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
        
        ></SpotifyPlayer>
        </div>
    )
}