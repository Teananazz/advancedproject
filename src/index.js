import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MessageScreen from './MessageScreen/MessageScreen'
import LoginScreen from './LoginScreen/LoginScreen';
import RegisterScreen from './RegisterForm/RegisterScreen';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";








const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(

    <BrowserRouter>
        <Routes>
            {/*<Route path="/" element={<MessageScreen />} />*/}
            {<Route path="/" element={<LoginScreen />} />}
            {<Route path="Register" element={<RegisterScreen />} />}
            {<Route path="Login" element={<LoginScreen />} />}           
        </Routes>
    </BrowserRouter>
    

)