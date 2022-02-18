import './Logo.css'
import logo from './logo-spotry.svg'
import logoGreen from './logo-green.svg';
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

export const LogoGreen = () => {

    return (

        <>
            <img src={logoGreen} className='logo-green' alt="Logotipo verde" />
        </>

    )

}

