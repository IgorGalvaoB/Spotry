import { useParams } from "react-router-dom";
import musics from '..//..//musics.json';


export const MusicDetails = ({ musics }) => {

    
    const { id } = useParams()
    
    const music  = musics.find((music) => music.musicID === id) || {}

    return (
        <div>
            <h1>{music.name}</h1>
            <p>{id}</p>
        </div>
    )

}