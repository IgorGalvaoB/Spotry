import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import APIRendler from "../Classes/apiRendler";
import { Navbar } from "../components/Navbar/Navbar";
import { Music } from "../components/Cards/Music";
import { Album } from '../components/Cards/Album'
import './Pages.css'
import FastAverageColor from 'fast-average-color';


const ArtistPage = ({ func_player }) => {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
    }

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
    const [followers, setFollowers] = useState('')
    const [popularity, setPopularity] = useState('');
    const [loading, setLoading] = useState(true);
    const [artistSingles,setArtistSingles] = useState('');
    const [showSingles,setShowSingles] = useState(false);
    const [showAlbums,setShowAlbums] = useState(false);
    
    //use effect---------------------------------------------------------

    useEffect(() => {
        setLoading(true)
        const api = new APIRendler()
        const topTracksApi = api.topTracksArtist(id)
        const artistAlbumsApi = api.artistAlbums(7, 0, id,'album')
        const apiArtist = api.artistImgName(id)
        const artistApiSingle = api.artistAlbums(7, 0, id,'single')
        Promise.all([topTracksApi, artistAlbumsApi, apiArtist,artistApiSingle]).then(values => {
            setTopTracks(values[0].tracks.map((track, index) => {
                return <Music func_player={func_player} index={index} name={track.name} key={track.id} artists={track.artists} duration_ms={track.duration_ms} id={track.id} image={track.album.images[1].url} />
            }))
            setTopTracksShown(values[0].tracks.slice(0, 5).map((track, index) => {
                return <Music func_player={func_player} index={index} name={track.name} key={track.id} artists={track.artists} duration_ms={track.duration_ms} id={track.id} image={track.album.images[1].url} />
            }))
            setArtistSingles(values[3].items.map(album => {
                return <Album name={album.name} key={album.id} id={album.id} image={album.images[0].url} artists={album.artists} />}))
            if (values[2][0].length >= 1) {
                setImgArtist(values[2][0][0].url)
                const fac = new FastAverageColor();

                fac.getColorAsync(values[2][0][0].url, {
                    ignoredColor: [[255, 255, 255, 255],[0, 0, 0, 255],[18, 18, 18, 255]]

                }).then(color => {
                    setBackGroundColor(color.rgb)
                }).catch(e => {
                    console.log(e);
                });
            }

            setArtistName(values[2][1])

            setPopularity(values[2][3])

            setTextShowMoreLess('Show more ...')
            setFollowers(numberWithCommas(values[2][2]))
            setArtistAlbums(values[1].items.map(album => {
                return <Album name={album.name} key={album.id} id={album.id} image={album.images[0].url} artists={album.artists} />
            }))
            setLoading(false)

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

    const toggleShowSingles=()=>{
        if(showSingles === false&&artistSingles.length>=7){
            const api = new APIRendler()
            setShowSingles(true)
            const artistApiSingle = api.artistAlbums(50, 0, id,'single').then(response=>{
            setArtistSingles(response.items.map(album => {
                return <Album name={album.name} key={album.id} id={album.id} image={album.images[0].url} artists={album.artists} />}))
            })
        }else{
            setShowSingles(false)
            setArtistSingles([...artistSingles].slice(0,7))
        }
    }
    const toggleShowAlbums=()=>{
        if(showAlbums === false&&artistAlbums.length>=7){
            const api = new APIRendler()
            setShowAlbums(true)
            const artistApiSingle = api.artistAlbums(50, 0, id,'album').then(response=>{
            setArtistAlbums(response.items.map(album => {
                console.log(album)
                return <Album name={album.name} key={album.id} id={album.id} image={album.images[0].url} artists={album.artists} />}))
                
            })
        }else{
            setShowAlbums(false)
            setArtistAlbums([...artistAlbums].slice(0,7))
        }
    }

    //-----------------------background-color-analizer-------------------
    return (

        <div>
            {!loading&&<div style={{padding:'63px'}}>
            <div className='artist-info-content' style={{ backgroundImage: `linear-gradient(to top,#121212,${backGroundColor}` }}>
                <img src={imgArtist} />
                <div>
                    <h1 style={{ marginTop: '180px', marginBottom: '0px', paddingBottom: '0px', fontSize: '4em' }}>{artistName}</h1>
                    <h3>Followers: {followers} • Popularity: {popularity}</h3>
                </div>
            </div>

            {(!showAlbums&&!showSingles)&&<div className="container-tracks">
                <h2>Popular</h2>
                {topTracksShown}
                {topTracksShown.length < 5 ? null : <h4 id='see-more-less' onClick={toggleShowTracks} style={{ cursor: 'pointer' }}>{textShowMoreLess}</h4>}
            </div>}
            {!showSingles&&<div >
                <h2 onClick={toggleShowAlbums}style={{ paddingLeft: '10%',cursor:'pointer' }}>{showAlbums?'Back':'Albums ...'}</h2>
                <div className="container-albums">
                    {artistAlbums}
                </div>
            </div>}
            {!showAlbums&&<div>
                {artistSingles.length===0?null:<h2 onClick={toggleShowSingles}style={{ paddingLeft: '10%',cursor:'pointer' }}>{showSingles?'Back':'Singles ...'}</h2>}
                <div className="container-albums">
                    {artistSingles}
                </div>
            </div>}
            </div>}
        </div>

    )
}
export default ArtistPage