export const Music = ({ name, image,id }) => {
  return (
    <div className="music">
      <img
        src = {image}
        alt="album image"

        width="150px"
      />
      <h3>Music Name</h3>
      <p>{name}</p>
    </div>
  );
};
