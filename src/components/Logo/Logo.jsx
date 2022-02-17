import './Logo.css'
import logo from './logo-spotry.svg'
import { Link } from 'react-router-dom'
export const Logo = () => {

    return (

        <>
            <Link to='/me'>
                <img src={logo} className='logo-spotry' alt="logo spotry" />
            </Link>
        </>

    );

}

