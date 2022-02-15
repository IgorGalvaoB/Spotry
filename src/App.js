import './App.css';
import { Navbar } from './components/Navbar/Navbar'
import { MusicList } from './components/MusicList/MusicList';
import MusicsData from './musics.json'
import { Route, Routes } from 'react-router-dom';
import { MusicDetails } from './components/MusicDetails/MusicDetails';
import { Album } from './components/Cards/Album';
import { Artist } from './components/Cards/Artist';
import { Music } from './components/Cards/Music';


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

    </div>
  );
}

export default App;
