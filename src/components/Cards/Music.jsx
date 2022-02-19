import './Cards.css'

export const Music = ({ name, image,id }) => {
  return (
    <div className="music">
      <img
        src = 'https://i.scdn.co/image/ab67616d0000b273f38235b3df46fdf3a21f6a63'
        alt="album image"

        width="150px"
      />
      <h3>Music Name</h3>
      <p>Artist</p>
    </div>
  );
};
