import { Navbar } from "../components/Navbar/Navbar";
import { SearchBarMain } from "../components/SearchBar/SearchBar"


const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
localStorage.setItem('refresh_token_spotry',params.refresh_token)
localStorage.setItem('access_token_spotry',params.access_token)
//localStorage.getItem('refresh_token_spotry')
  
const MainPage = ()=>{
    return(
        <>
            <Navbar/>
            <div >
                <SearchBarMain/>
            </div>
        </>
    )
}
export default MainPage