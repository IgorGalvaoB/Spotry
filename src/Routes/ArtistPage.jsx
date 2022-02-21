import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import APIRendler from "../Classes/apiRendler";
import { Navbar } from "../components/Navbar/Navbar";
import { Music } from "../components/Cards/Music";
import { Album } from '../components/Cards/Album'
import './Pages.css'
import FastAverageColor from 'fast-average-color';
const ArtistPage = () => {
    //variaveis---------------------------------------------------------
    const [searchParams, setSearchParams] = useSearchParams()
    let id = searchParams.get('id')
    const [topTracks, setTopTracks] = useState('');
    const [artistAlbums, setArtistAlbums] = useState('');
    const [topTracksShown, setTopTracksShown] = useState('')
    const [textShowMoreLess, setTextShowMoreLess] = useState('Show more ...')
    const [imgArtist, setImgArtist] = useState('https://i.scdn.co/image/ab67616d0000b2731cc6d15e607e0a514b7f4b95')
    const [artistName, setArtistName] = useState('')
    const [backGroundColor, setBackGroundColor] = useState('rgb(122,122,122)')
    const [followers,setFollowers] = useState('')
    const [popularity, setPopularity] = useState('');
    //use effect---------------------------------------------------------
    useEffect(() => {
        const api = new APIRendler()
        const topTracksApi = api.topTracksArtist(id)
        const artistAlbumsApi = api.artistAlbums(50, 0, id)
        const apiArtist = api.artistImgName(id)

        Promise.all([topTracksApi, artistAlbumsApi, apiArtist]).then(values => {
            setTopTracks(values[0].tracks.map((track, index) => {
                return <Music index={index} name={track.name} key={track.id} artists={track.artists} duration_ms={track.duration_ms} id={track.id} image={track.album.images[1].url} />
            }))
            setTopTracksShown(values[0].tracks.slice(0, 5).map((track, index) => {
                return <Music index={index} name={track.name} key={track.id} artists={track.artists} duration_ms={track.duration_ms} id={track.id} image={track.album.images[1].url} />
            }))
            
            if (values[2][0].length >= 1) {
                setImgArtist(values[2][0][0].url)
                const fac = new FastAverageColor();
               
                fac.getColorAsync(values[2][0][0].url,{
                    ignoredColor: [255, 255, 255, 255] ,
                    ignoredColor: [0, 0, 0, 255] ,
                    ignoredColor: [18, 18, 18, 255]

                })
                    .then(color => {
                        setBackGroundColor(color.rgb)
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
            
            setArtistName(values[2][1])
            setFollowers(values[2][2])
            setPopularity(values[2][3])
            setTextShowMoreLess('Show more ...')
            setArtistAlbums(values[1].items.map(album => {
                return <Album name={album.name} key={album.id} id={album.id} image={album.images[0].url} artists={album.artists} />
            }))


        })

    }, [id]);
    //-------------------------------------------------------------------
    const toggleShowTracks = () => {
        if (topTracksShown.length <= 5) {
            setTopTracksShown(topTracks)
            setTextShowMoreLess('Show less')
        } else {
            setTopTracksShown(topTracksShown.slice(0, 5))
            setTextShowMoreLess('Show more ...')
        }
    }



    //-----------------------background-color-analizer-------------------
    return (

        <>
            <Navbar />
            <div className= 'artist-info-content' style={{backgroundImage:`linear-gradient(to top,#121212,${backGroundColor}`}}>
                <img src={imgArtist} />
                <div>
                    <h1 style={{marginTop:'300px',marginBottom:'0px',paddingBottom:'0px',fontSize:'80px'}}>{artistName}</h1>
                    <h3>Followers : {followers}, popularity : {popularity}</h3>
                </div>
            </div>
            <div className="container-tracks">
                <h2>Popular</h2>
                {topTracksShown}
                {topTracksShown.length<5?null:<h4 id='see-more-less' onClick={toggleShowTracks} style={{ cursor: 'pointer' }}>{textShowMoreLess}</h4>}
            </div>
            <h2 style={{ paddingLeft: '10%' }}>Albums</h2>
            <div className="container-albums">

                {artistAlbums}
            </div>
        </>

    )
}
export default ArtistPage