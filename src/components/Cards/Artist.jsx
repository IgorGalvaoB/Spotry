import './Cards.css'



export const Artist = ({ image, name, id}) => {
  return (
    <div className="artist">
      <img
        src={image}
        alt="album image"
        width="150px"
      />
      <h3>{name}</h3>
      <p>Artist</p>
    </div>
  );
};
