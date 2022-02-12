import "./Navbar.css";
import { Logo } from "../Logo/Logo";
import { ButtonPlaylist } from "../Buttons/ButtonPlaylist";
import { Search } from "../Search/Search";
import { MyAccount } from "../Buttons/MyAccount";
import { Logoff } from "../Buttons/Logoff";

export const Navbar = () => {
  return (
    <header className="header">
      <div className="headerContainer">
        <div className="headerContainer__a">
          <Logo />
          <ButtonPlaylist />
        </div>
        <Search />
      <div className="headerContainer__b">
        <MyAccount />
        <Logoff />
      </div>
      </div>
    </header>
  );
};
