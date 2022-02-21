//COMPONENTE PARA ORGANIZAR A DEMONSTRAÇÃO DE CARTAS DE ALBUMS
import { ArtistTitle } from "./ArtistTitle";

export const Album = ({ artists, name, id, image }) => {
  
  return (
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
  );
};
