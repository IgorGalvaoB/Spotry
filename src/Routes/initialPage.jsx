import './InitialPage.css'
import { LogoGreen } from '..//components/Logo/Logo'
import { Navbar } from '../components/Navbar/Navbar'

const Initial = ()=>{
  
    return(
      <>
        <Navbar/>
        <div className='LoginContainer'>
          <LogoGreen />
          <button className='btnLogin'>
            <a href='http://localhost:5000/login'>Login</a>  
          </button>
        </div>
      </>
    )
}
export default Initial