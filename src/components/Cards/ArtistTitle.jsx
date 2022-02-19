import { Link } from 'react-router-dom'


export const ArtistTitle = ({ artists }) => {

    let arrTitle = artists.map((artist, index, arr) => {
        if (arr.length === 1) {
            return (

                <Link to={{ pathname: `/artist/?id=${artist.id}` }} className='artist-title'>
                    {artist.name}
                </Link>
            )
        } else {
            if (index === arr.length - 1) {
                return (
                    <Link to={{ pathname: `/artist/?id=${artist.id}` }} className='artist-title'>
                        {artist.name}
                    </Link>
                )
            } else {
                return (
                    <>
                        <Link to={{ pathname: `/artist/?id=${artist.id}` }} className='artist-title'>
                            {artist.name}
                        </Link>
                        <span>, </span>
                    </>
                )
            }
        }
    })
    return (
        <span>
            {arrTitle}
        </span>

    )
}