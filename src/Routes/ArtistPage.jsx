import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import APIRendler from "../Classes/apiRendler";
import { Navbar } from "../components/Navbar/Navbar";
import { Music } from "../components/Cards/Music";
import { Album } from '../components/Cards/Album'
import './Pages.css'
const ArtistPage = () => {
    //variaveis---------------------------------------------------------
    const [searchParams, setSearchParams] = useSearchParams()
    let id = searchParams.get('id')
    const [topTracks, setTopTracks] = useState('');
    const [artistAlbums,setArtistAlbums] = useState('');
    const [topTracksShown,setTopTracksShown] = useState('')
    const [textShowMoreLess,setTextShowMoreLess] = useState('Show more ...')
    const [imgArtist,setImgArtist] = useState('https://i.scdn.co/image/ab67616d0000b2731cc6d15e607e0a514b7f4b95')
    const [artistName,setArtistName] = useState('')
    //use effect---------------------------------------------------------
    useEffect(() => {
        const api = new APIRendler()
        const topTracksApi = api.topTracksArtist(id)
        const artistAlbumsApi = api.artistAlbums(9, 0, id)
        const apiArtist = api.artistImgName(id)
    
        Promise.all([topTracksApi, artistAlbumsApi,apiArtist]).then(values => {
            setTopTracks(values[0].tracks.map((track,index) => {
                return <Music index = {index} name={track.name} key={track.id} artists={track.artists} duration_ms={track.duration_ms} id={track.id} image={track.album.images[1].url} />
            }))
            setTopTracksShown(values[0].tracks.slice(0,5).map((track,index) => {
                return <Music index = {index} name={track.name} key={track.id} artists={track.artists} duration_ms={track.duration_ms} id={track.id} image={track.album.images[1].url} />
            }))
            if(values[2][0].length>=1){
                setImgArtist(values[2][0][0].url)
            }
            setArtistName(values[2][1])
            
            setArtistAlbums(values[1].items.map(album=>{
                return <Album name={album.name} key={album.id} id={album.id} image={album.images[0].url} artists={album.artists}/>
            }))
        })

    }, [id]);
    //-------------------------------------------------------------------
    const toggleShowTracks=()=>{
        if(topTracksShown.length<=5){
            setTopTracksShown(topTracks)
            setTextShowMoreLess('Show less')
        }else{
            setTopTracksShown(topTracksShown.slice(0,5))
            setTextShowMoreLess('Show more ...')
        }
    }
    return (

        <>
            <Navbar />
            <div style={{width:'80%',marginLeft:'10%'}}>
                <img src={imgArtist} style={{paddingTop:'45px',width:'500px', paddingLeft:'50px'}}/>
                <div>
                    <h1>{artistName}</h1>
                </div>
            </div>
            <div className="container-tracks">
                <h2>Popular</h2>
                {topTracksShown}
                <h4 id='see-more-less' onClick={toggleShowTracks} style={{cursor:'pointer'}}>{textShowMoreLess}</h4>
            </div>
            <h2 style={{paddingLeft:'10%'}}>Albums</h2>
            <div className="container-albums">
              
                {artistAlbums}
            </div>
        </>

    )
}
export default ArtistPage