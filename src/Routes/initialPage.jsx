import './InitialPage.css'
import { LogoGreen } from '..//components/Logo/Logo'

const Initial = ()=>{
  
    return(
      <div className='LoginContainer'>
        <LogoGreen />
        <button className='btnLogin'>
          <a href='http://localhost:5000/login'>Login</a>  
        </button>
      </div>
    )
}
export default Initial