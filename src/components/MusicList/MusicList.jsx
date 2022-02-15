import { Link } from "react-router-dom";

export const MusicList = ({ musics }) => {
  return (
    <>
      {musics.map((music) => {
        return (
          <Link key={music.musicID} className="music-item" to={`/${music.musicID}`}>
            {music.name}
          </Link>
        );
      })}
      ;
    </>
  );
};
