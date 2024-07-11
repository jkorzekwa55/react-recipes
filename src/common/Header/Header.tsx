import Surfer from '../Surfer/Surfer';
import './Header.css';

 function Header () {
    return (
        <>
            <nav className='header-design'>
                <em className='main-title'>Recipes</em>
                <ul className='navigation'>
                    <Surfer path={"/"} destination={"Home"}/>
                    <Surfer path={"/login"} destination={"Login"}/>
                </ul>
            </nav>
    
        </>
    ) 
    
    
}

export default Header;