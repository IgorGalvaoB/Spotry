import "./Navbar.css";
import { Logo } from "../Logo/Logo";
import { ButtonPlaylist } from "../Buttons/ButtonPlaylist";
import { SearchBar } from "../SearchBar/SearchBar";
import { MyAccount } from "../Buttons/MyAccount";
import { Logoff } from "../Buttons/Logoff";

export const Navbar = () => {
  return (
    <header className="header">
      <div className="headerContainer">
        <div className="headerContainer__a">
          <a href="/">
            <Logo />
          </a>
          <ButtonPlaylist />
        </div>
        <SearchBar />
        <div className="headerContainer__b">
          <MyAccount />
          <Logoff />
        </div>
      </div>
    </header>
  );
};
export const NavbarMain = () => {
  return (
    <header className="header">
      <div className="headerContainer">
        <div className="headerContainer__a">
          <a href="/">
            <Logo />
          </a>
          <ButtonPlaylist />
        </div>
        <div className="headerContainer__b">
          <MyAccount />
          <Logoff />
        </div>
      </div>
    </header>
  );
};
