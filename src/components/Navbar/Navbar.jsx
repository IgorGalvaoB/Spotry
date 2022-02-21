//COMPONENTE NAVBAR PRESENTE EM TODAS AS PÁGINAS
import "./Navbar.css";
import { Logo } from "../Logo/Logo";
import { ButtonPlaylist } from "../Buttons/ButtonPlaylist";
import { SearchBar } from "../SearchBar/SearchBar";
import { Logoff } from "../Buttons/Logoff";

export const Navbar = () => {
  const path = window.location.pathname;
  const conditionOne = path === '/me'
  const conditionTwo = path === '/'
  const conditionThree = conditionOne || conditionTwo
  return (
    <header className="header">
      <div className="headerContainer">
        <div className="headerContainer__a">
          <Logo />
          {!conditionTwo&&<ButtonPlaylist />}{/*CONDICIONAL PARA NÃO EXIBIR O BOTÃO DE PLAYLIST NA PÁGINA DE LOGIN*/}
        </div>
        {!conditionThree&&<SearchBar />}{/*CONDICIONAL PARA NÃO EXIBIR A BARRA DE SEARCH NA PÁGINA DE LOGIN NEM NA PAGINA MAIN (/ME)*/}
        <div className="headerContainer__b">
          {!conditionTwo&&<Logoff />}{/*CONDICIONAL PARA NÃO EXIBIR O BOTAO LOGOFF NA PÁGINA DE LOGIN*/}
        </div>
      </div>
    </header>
  );
};

