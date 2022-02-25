import './InitialPage.css'
import { LogoGreen } from '..//components/Logo/Logo'


const Initial = ()=>{
  
    return(
      <>
        
        <div className='LoginContainer'>
          <LogoGreen />
          <button className='btnLogin'>
            <a href='https://spotry-auth.herokuapp.com/login'>Login</a>  
          </button>
        </div>
      </>
    )
}
export default Initial