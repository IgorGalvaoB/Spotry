import './App.css';
import { Navbar } from './components/Navbar/Navbar'
import { MusicList } from './components/MusicList/MusicList';
import MusicsData from './musics.json'
import { Route, Routes } from 'react-router-dom';
import { MusicDetails } from './components/MusicDetails/MusicDetails';
import { Album } from './components/Cards/Album';
import { Artist } from './components/Cards/Artist';
import { Music } from './components/Cards/Music';
import APIRendler from './Classes/apiRendler';


const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
localStorage.setItem('refresh_token_spotry',params.refresh_token)
localStorage.setItem('access_token_spotry',params.access_token)
//localStorage.getItem('refresh_token_spotry')
const teste = new APIRendler
const name = teste.searchArtist(1,0,'0TnOYISbd1XYRBk9myaseg',console.log).name
function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
      {/* <MusicList musics={MusicsData} /> */}
      </div>
      {/* <Routes>
        <Route path='/:id' element = {<MusicDetails musics={MusicsData} />} />
      </Routes> */}

      <Album />
      <Artist />
      <Music />
      <p>{name}</p>
    </div>
  );
}

export default App;
