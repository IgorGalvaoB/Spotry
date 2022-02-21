import { Link } from 'react-router-dom'
import logo from '../../images/luana.jpg'
import './Cards.css'
export const Artist = ({image,id,name})=>{
  let url
  if(image.length === 0){
    url = logo
  }else{
    url = image[0].url
  }
  return (
    <Link to={{ pathname: `/artist/?id=${id}` }} style={{textDecoration:'none',color:'inherit'}}>
      <div className="artist">
        <img src={url}></img>
        <h4 className='artist-name'>{name}</h4>
        <p style={{marginLeft:'15px'}}>Artist</p>
      </div>
    </Link>
  )
}