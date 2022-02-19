import { useSearchParams } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import APIRendler from "../Classes/apiRendler";
import { Music } from "../components/Cards/Music";

const Search = ()=>{
    
    const [searchParams, setSearchParams] = useSearchParams()
    const find = searchParams.get('q')
    
    const [data, setData] = useState('');
    
    useEffect(()=>{
        const teste = new APIRendler()
        teste.search(find,50,0,'artist',console.log).then(response => {
            setData(response)
        })
    },[find])
    console.log(data)
    console.log(localStorage.getItem('refresh_token_spotry'))

    return(
        <>
            <Navbar/>
            <div> 
                <Music /> 
            </div>
        </>
    )
}
export default Search