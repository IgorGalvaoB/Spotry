import { Navbar } from "../components/Navbar/Navbar";
import { useEffect } from "react";
import { SearchBarMain } from "../components/SearchBar/SearchBar"



const MainPage = ()=>{
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    if(params.refresh_token){
        localStorage.setItem('refresh_token_spotry',params.refresh_token)
        localStorage.setItem('access_token_spotry',params.access_token)
    }
    
    
    //localStorage.getItem('refresh_token_spotry')
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