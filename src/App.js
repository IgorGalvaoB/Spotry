import './App.css';
import { Navbar } from './components/Navbar/Navbar'
import { MusicList } from './components/MusicList/MusicList';
import MusicsData from './musics.json'
import { Route, Routes } from 'react-router-dom';
import { MusicDetails } from './components/MusicDetails/MusicDetails';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
      <MusicList musics={MusicsData} />
      </div>
      <Routes>
        <Route path='/:id' element = {<MusicDetails musics={MusicsData} />} />
      </Routes>
    </div>
  );
}

export default App;
