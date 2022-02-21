//ESSE COMPONENTE APENAS FORMATA O TEXTO DOS AUTORES DOS ALBUMS E MUSICAS PARA QUE RETORNE O LINK PARA A PÁGINA DOS ARTISTAS
import './Cards.css'
import { Link } from 'react-router-dom'

export const ArtistTitle = ({ artists }) => {
    let arrTitle = artists.map((artist, index, arr) => {
        if (arr.length === 1 || index === arr.length - 1) {
            return (
                <Link style={{'text-decoration':'none',color:'inherit'}} to={{ pathname: `/artist/?id=${artist.id}` }} className='artist-title'>{/*LINK QUE LEVA PARA A PÁGINA DO ARTISTA*/}
                    {artist.name}
                </Link>
            )
        } else {
            return (
                <>
                    <Link  style={{'text-decoration':'none',color:'inherit'}}to={{ pathname: `/artist/?id=${artist.id}` }} className='artist-title'>{/*LINK QUE LEVA PARA A PÁGINA DO ARTISTA*/}
                        {artist.name}
                    </Link>
                    <span>, </span>
                </>
            )
        }

    })
    return (
        <span className='artist-title-link'>
            {arrTitle}{/*VETOR RETORNO COM TODOS OS LINKS DOS ARTISTAS QUE FORAM PASSADOS POR PROPS E SEPARADOS POR VIRGULA E ESPAÇO*/}
        </span>
    )
}