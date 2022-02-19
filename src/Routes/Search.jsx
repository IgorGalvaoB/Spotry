import { Link, useSearchParams } from "react-router-dom";
import './Search.css'
import { Navbar } from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import APIRendler from "../Classes/apiRendler";
import { Music } from "../components/Cards/Music";
import { Artist } from "../components/Cards/Artist";
import { Album } from "../components/Cards/Album";

const Search = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const find = searchParams.get('q')
    const type = searchParams.get('type')
    
    const [tracks, setTracks] = useState('');
    const [artists, setArtists] = useState('');
    const [albums, setAlbums] = useState('');
    
    let conditionRendlerAll = false;
    let conditionRendlerTracks = false;
    let conditionRendlerAlbums = false;
    let conditionRendlerArtists = false;
    if(!type){
        conditionRendlerAll = true
    }else{
        if(type === 'track'){
            conditionRendlerTracks = true
        }else if(type === 'album'){
            conditionRendlerAlbums = true
        }else if(type==='artist'){
            conditionRendlerArtists = true
        }
    }

    useEffect(() => {
        const teste = new APIRendler()
        if (!type) {
            teste.search(find, 10, 0, 'artist,track,album', console.log).then(response => {

                setTracks(response.tracks.items.slice(0, 5).map(track => <Music name={track.name} image={track.album.images[2].url} year={track.album.release_date} key={track.id} id={track.id} artists={track.artists} />))

                setArtists(response.artists.items.slice(0, 8).map(artist => <Artist name={artist.name} key={artist.id} id={artist.id} image={artist.images[1].url} />))

                setAlbums(response.albums.items.slice(0, 8).map(album => <Album name={album.name} key={album.id} id={album.id} image={album.images[1].url} />))

            })
        } else if (type === 'track') {
            teste.search(find, 50, 0, type, console.log).then(response => {
                setTracks(response.tracks.items.map(track => <Music name={track.name} image={track.album.images[2].url} year={track.album.release_date} key={track.id} id={track.id} artists={track.artists} />))
            })
        } else if (type === 'artist') {
            teste.search(find, 30, 0, type, console.log).then(response => {
                setArtists(response.artists.items.map(artist => <Artist name={artist.name} key={artist.id} id={artist.id} image={artist.images[1].url} />))
            })
        } else {
            teste.search(find, 30, 0, type, console.log).then(response => {
                setAlbums(response.albums.items.map(album => <Album name={album.name} key={album.id} id={album.id} image={album.images[1].url} />))
            })
        }
    }, [find, type])

    return (
        <>
            <Navbar />
            <div className ='container-all'>
                {(conditionRendlerAll||conditionRendlerTracks)&&<div className="container-tracks">
                    {!type?<Link to={`/search/?type=track&q=${find}`}>
                        <p>Tracks</p>
                    </Link>:<p>Tracks</p>}
                    {tracks}
                </div>}
                
                {(conditionRendlerAll||conditionRendlerArtists)&&<div>
                    {!type?<Link to={`/search/?type=artist&q=${find}`}>
                        <p>Artists</p>
                    </Link>:<p>Artists</p>}
                    <div className="container-artists">
                        {artists}
                    </div>
                </div>}

                {(conditionRendlerAll||conditionRendlerAlbums)&&<div>
                    {!type?<Link to={`/search/?type=album&q=${find}`}>
                        <p>Albums</p>
                    </Link>:<p>Albums</p>}
                    <div className="container-albums">
                        {albums}
                    </div>
                </div>}

            </div>
        </>)
}
export default Search

