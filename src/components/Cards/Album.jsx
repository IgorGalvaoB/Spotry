//COMPONENTE PARA ORGANIZAR A DEMONSTRAÇÃO DE CARTAS DE ALBUMS
import { Link } from "react-router-dom";
import { ArtistTitle } from "./ArtistTitle";

export const Album = ({ artists, name, id, image }) => {
  return (
    <Link to={{ pathname: `/album/?id=${id}` }} style={{textDecoration:'none',color:'inherit'}}>
      <div className="album">
        <img
          aria-label='aki'
          data-ballon-pos='down'
          src={image}         //ADICIONAR O LINK QUE VIAJA PARA PÁGINA DO ALBUM EM QUESTÃO USANDO O ID PASSADO
          alt = {`${name} album`}
        />
        <h4 className="album-name">{name}</h4>
        <ArtistTitle artists={artists}/>
      </div>
    </Link>
  );
};
