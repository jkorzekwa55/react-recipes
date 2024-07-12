import { useContext, useState, useEffect } from 'react';
import Surfer from '../Surfer/Surfer';
import './Header.css';
import { myContext } from '../../app/context';
import { MyContextType } from '../../interfaces';
import CInput from '../CInput/CInput';
import { useNavigate } from 'react-router-dom';

function Header() {
    const { state, setGlobal } = useContext(myContext) as MyContextType;
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
      }

      useEffect(()=> {
        setGlobal("search", search);
      }, [search])

    return (
        <>
            <nav className='header-design'>
                <em className='main-title' onClick={()=>navigate("/")}>Recipes</em>
                <div className='navigation'>
                    <CInput labelName="none" type="text" name="search" design="basic-design" placeholder="" errorCheck={()=>{}} emitFunction={inputHandler} />
                    <Surfer path={"/"} destination={"Home"} />
                    {state.global.token === "" ? (
                        <Surfer path={"/login"} destination={"Login"} />
                    ) : (
                        <>
                            <Surfer path={"/favorites"} destination={"Favorites"} />
                            <span onClick={() => setGlobal("token", "")}>
                                <Surfer path={"/"} destination={"Log out"} />
                            </span>
                        </>
                    )}
                </div>
            </nav>

        </>
    )


}

export default Header;