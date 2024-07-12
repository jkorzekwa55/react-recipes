import Home from '../Home/Home';
import { Routes, Route, Navigate } from "react-router-dom";
import Login from '../Login/Login';
import RecipeDetail from '../RecipeDetail/RecipeDetail';
import Favorite from '../Favorite/Favorite';
import { useContext } from 'react';
import { myContext } from '../../app/context';
import { MyContextType } from '../../interfaces';

function Body() {
    const { state } = useContext(myContext) as MyContextType;

    return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to={"/"} replace />} />
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                {state.global.token !== "" ? (
                    <Route path="/favorites" element={<Favorite />} />
                ) : null}
                {state.global.recipe.label !== ""
                    ? (<Route path="/recipedetail" element={<RecipeDetail />} />)
                    : null
                }
            </Routes>
        </>
    )
}

export default Body;