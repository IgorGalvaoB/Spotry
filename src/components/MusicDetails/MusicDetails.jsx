import { useParams } from "react-router-dom";


export const MusicDetails = ({ musics }) => {
    
    const { id } = useParams();
    const music = musics.find(music => music.musicID === id) || {}

    return (
        <div>
            <h1>{music.name}</h1>
        </div>
    );

}