export const Album = ({ artists, name, key, image }) => {
  return (
    <div className="album">
      <img
        src={image}
        alt = {`${name} album`}
        width="150px"
      />
      <h3>{name}</h3>
      <p></p>
    </div>
  );
};
