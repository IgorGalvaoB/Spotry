import { useEffect, useState } from "react"
import APIRendler from "../Classes/apiRendler"
import { useSearchParams } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Music } from "../components/Cards/Music";
import './Pages.css'
import FastAverageColor from 'fast-average-color';
import { ArtistTitle } from "../components/Cards/ArtistTitle";
export const AlbumPage = ({ func_player }) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [tracks, setTracks] = useState('')
    const [name,setName]=useState('')
    const [artists,setArtists]=useState([])
    const [type,setType]=useState('')
    const [image,setImage] = useState('')
    const [year,setYear] = useState('')
    const [total,setTotal] = useState('')
    const [backGroundColor, setBackGroundColor] = useState('rgb(122,122,122)')
    let id = searchParams.get('id')




    //useEffect----------------------------------------------------------------------
    useEffect(() => {
        const api = new APIRendler()
        api.album(id).then(response => {
            console.log(response)
            setImage(response.images[0].url)
            setName(response.name)
            setArtists(response.artists)
            setType(response.album_type)
            setYear(response.release_date.slice(0,4))
            setTotal(response.total_tracks)
            setTracks(response.tracks.items.map((track, index) => <Music func_player={func_player} name={track.name} key={track.id} id={track.id} artists={track.artists} duration_ms={track.duration_ms} index={index} album_id={id}/>
            ))
            const fac = new FastAverageColor();

            fac.getColorAsync(response.images[0].url, {
                ignoredColor: [[255, 255, 255, 255], [0, 0, 0, 255], [18, 18, 18, 255]]

            }).then(color => {
                setBackGroundColor(color.rgb)
            }).catch(e => {
                console.log(e);
            });

        })
        
    }, [id]);
    //-------------------------------------------------------------------------------   
    
    return (
        <>
            <Navbar/>
            <div style={{paddingTop:'63px',width:'100%'}}>
                <div className="album-info-content" style={{ backgroundImage: `linear-gradient(to left,#121212,${backGroundColor}`  }}>
                    <img src={image}></img>
                    <div className="album-name" style={{width:'100%'}}>
                        <h6 style={{paddingTop:'100px',marginBottom:'0px'}}>{type.toUpperCase()}</h6>
                        <h1 style={{fontSize:'4em'}}>{name}</h1>
                        <h3><ArtistTitle artists={artists}/>Year: {year} • {total} tracks</h3>

                    </div>
                </div>
            </div>
            <div className="container-album-tracks">
            
                {tracks}

            
            </div>
        </>
    )
}
