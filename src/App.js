import { Route, Routes} from 'react-router-dom';
import Initial from './Routes/initialPage';
import MainPage from './Routes/MainPage';
import Search from './Routes/Search';
import './App.css'
import { Player } from './components/Player/Player';
import ArtistPage from './Routes/ArtistPage';
import APIRendler from './Classes/apiRendler';
import{ useState } from 'react';
import { AlbumPage } from './Routes/AlbumPage';
import { Navbar } from './components/Navbar/Navbar';







/* const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
localStorage.setItem('refresh_token_spotry',params.refresh_token)
localStorage.setItem('access_token_spotry',params.access_token) */
//localStorage.getItem('refresh_token_spotry')

function App() {
  const [playback, setPlayback] = useState(''); 
  const [player,setPlayer] = useState([])
  
  const setPlay=(state)=>{
    setPlayer(state)
    console.log(state)
  }
  return (

    <div>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Initial/>}/>
          <Route path= '/me' element = {<MainPage/>}/>
          <Route path='/search' element = {<Search func_player={setPlay}/>}/>
          <Route path='/artist' element = {<ArtistPage func_player={setPlay}/>}/>
          <Route path='/album' element = {<AlbumPage func_player={setPlay}/>}/>
        </Routes>
        {window.location.pathname!=='/'&&<Player player={player}/>}
       
    </div>
  );
}

export default App;
