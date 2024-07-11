import Home from '../Home/Home';
import { Routes, Route, Navigate } from "react-router-dom";
import Login from '../Login/Login';

 function Body () {
    return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to={"/"} replace />} />
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
            </Routes>
        </>
    ) 
}

export default Body;