import { Link, useSearchParams } from "react-router-dom";
import './Pages.css'

import { useEffect, useState } from "react";
import APIRendler from "../Classes/apiRendler";
import { Music } from "../components/Cards/Music";
import { Artist } from "../components/Cards/Artist";
import { Album } from "../components/Cards/Album";
import Loading from '../images/loading.svg'

const Search = ({ func_player }) => {

    const [searchParams, setSearchParams] = useSearchParams()
    const find = searchParams.get('q')
    const type = searchParams.get('type')

    const [tracks, setTracks] = useState(false);
    const [artists, setArtists] = useState(false);
    const [albums, setAlbums] = useState(false);
    const [loading, setLoading] = useState(true);
    const [not, setNot] = useState(false)
    
    let conditionRendlerAll = false;
    let conditionRendlerTracks = false;
    let conditionRendlerAlbums = false;
    let conditionRendlerArtists = false;

    if (!type) {
        conditionRendlerAll = true
    } else {
        if (type === 'track') {
            conditionRendlerTracks = true
        } else if (type === 'album') {
            conditionRendlerAlbums = true
        } else if (type === 'artist') {
            conditionRendlerArtists = true
        }
    }

    useEffect(() => {
        setLoading(true)
        setNot(false)
        const api = new APIRendler()
        if (!type) {
            api.search(find, 7, 0, 'artist,track,album', console.log).then(response => {
                //tracks

                if (response.tracks.length === 0) {
                    setTracks('')
                } else {
                    setTracks(response.tracks.items.slice(0, 5).map((track,index) => <Music func_player={func_player} name={track.name} image={track.album.images[2].url} year={track.album.release_date} key={track.id} id={track.id} artists={track.artists} duration_ms={track.duration_ms} index={index} />))
                }
                 
                //albums
                if (response.albums.length === 0) {
                    setAlbums('')
                } else {
                    setAlbums(response.albums.items.map(album => <Album name={album.name} key={album.id} id={album.id} image={album.images[0].url} artists={album.artists} />
                    ))
                }
                //artists
                if(response.artists.items.length===0){
                    setArtists('')
                }else{
                
                   setArtists(response.artists.items.map(artist=><Artist name={artist.name} key={artist.id} id={artist.id} image={artist.images}/>))
                }  

                setLoading(false)
                setNot(true)
            }).catch(error=>{
                console.log(error)
            })

        } else{
            if(type === 'track') {
                api.search(find, 50, 0, type, console.log).then(response => {
                    setTracks(response.tracks.items.map((track,index) => <Music func_player={func_player} name={track.name} image={track.album.images[2].url} year={track.album.release_date} key={track.id} id={track.id} artists={track.artists} duration_ms={track.duration_ms} index={index}/>))
                    console.log(response.tracks.items)
                    setLoading(false)
                    setNot(true)
                }).catch(error=>{
                    console.log(error)
                })
            } else if (type === 'artist') {
                api.search(find, 50, 0, type, console.log).then(response => {
                    setArtists(response.artists.items.map(artist=><Artist name={artist.name} key={artist.id} id={artist.id} image={artist.images}/>))
                    
                    setLoading(false)
                    setNot(true)
                }).catch(error=>{
                    console.log(error)
        
                })
            } else if(type ==='album'){
                api.search(find,50,0,type,console.log).then(response=>{
                    setAlbums(response.albums.items.map(album=><Album name = {album.name} key= {album.id} id={album.id} image={album.images[0].url} artists={album.artists}/>))
                    setLoading(false)
                
                    setNot(true)
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
        

       
    }, [find, type])


    const container=(
        <div className='container-all'>
            
            {(conditionRendlerAll || conditionRendlerTracks) && <div>
                {!type ? <Link style={{textDecoration:'none',color:'inherit'}} to={`/search/?type=track&q=${find}`}>
                    {tracks.length === 0 ? null :  <h2 className="albums-tracks-artists-link">Tracks</h2>}
                </Link> : <h2 className="albums-tracks-artists-link">Tracks</h2>}
                <div className="container-tracks">
                    {tracks}
                </div>
                
            </div>}

           
            {(conditionRendlerAll || conditionRendlerArtists) && 
            <div>
                {!type ? <Link style={{textDecoration:'none',color:'inherit'}} to={`/search/?type=artist&q=${find}`}>
                    {artists.length === 0 ? null : <h2 className="albums-tracks-artists-link">Artists</h2>}
                </Link> : <h2 className="albums-tracks-artists-link">Artists</h2>}
                <div className="container-artists">
                    {artists}
                </div>
            </div>}

            {(conditionRendlerAll || conditionRendlerAlbums) && <div>
                {!type ? <Link style={{textDecoration:'none',color:'inherit'}} to={`/search/?type=album&q=${find}`}>
                    {albums.length === 0 ? null : <h2 className="albums-tracks-artists-link">Albums</h2>}
                </Link> : <h2 className="albums-tracks-artists-link">Albums</h2>}
                <div className="container-albums">
                    {albums}
                </div>
            </div>}
        </div>    
        )

    return (
        <>
            
            {!loading&&container}
            {loading&&<div style={{padding:'300px'}} className="loading"><h1>loading</h1></div>}
            {(not&&albums.length===0&&tracks.length===0&&artists.length===0)&&<div><h1>Nothing to show</h1></div>}
         
        </>
        )
}
export default Search

