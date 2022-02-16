import './App.css';
import { Navbar } from './components/Navbar/Navbar'
import { MusicList } from './components/MusicList/MusicList';
import MusicsData from './musics.json'
import { Route, Routes } from 'react-router-dom';
import { MusicDetails } from './components/MusicDetails/MusicDetails';
import { Album } from './components/Cards/Album';
import { Artist } from './components/Cards/Artist';
import { Music } from './components/Cards/Music';



const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

const access_token = params.access_token;
const refresh_token = params.refresh_token;

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
      <p>{access_token}</p>
      <p>{refresh_token}</p>
    </div>
  );
}

export default App;
