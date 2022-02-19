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
          {!conditionTwo&&<ButtonPlaylist />}
        </div>
        {!conditionThree&&<SearchBar />}
        <div className="headerContainer__b">
          {!conditionTwo&&<Logoff />}
        </div>
      </div>
    </header>
  );
};

