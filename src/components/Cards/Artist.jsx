import logo from '../../images/luana.jpg'
import './Cards.css'
export const Artist = ({image,id,name})=>{
  let url
  console.log(image)
  if(image.length === 0){
    url = logo
  }else{
    url = image[0].url
  }
  return (
    <div className="artist">
      <img src={url}></img>
      <h4 className='artist-name'>{name}</h4>
      <p style={{'margin-left':'15px'}}>Artist</p>
    </div>
  )
}