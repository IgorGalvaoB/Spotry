import { Navbar } from "../components/Navbar/Navbar";
import { useSearchParams } from "react-router-dom";


const Search = ()=>{
  
    const [searchParams, setSearchParams] = useSearchParams()
    //console.log(searchParams.get('q'))
    return(
        <>
            <Navbar/>
            <div>
              

            </div>
        </>
    )
}
export default Search