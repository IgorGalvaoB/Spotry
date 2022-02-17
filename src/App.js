import { Route, Routes } from 'react-router-dom';
import Initial from './Routes/initialPage';
import MainPage from './Routes/MainPage';
import Search from './Routes/Search';




/* const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
localStorage.setItem('refresh_token_spotry',params.refresh_token)
localStorage.setItem('access_token_spotry',params.access_token) */
//localStorage.getItem('refresh_token_spotry')

function App() {
  return (
    <div>
     
        <Routes>
          <Route path='/' element = {<Initial/>}/>
          <Route path='/me' element = {<MainPage/>}/>
          <Route path='/search' element = {<Search/>}/>
        </Routes>
  
    </div>
  );
}

export default App;
