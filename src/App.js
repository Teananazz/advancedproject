


import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import LoginScreen from './LoginScreen/LoginScreen';
import RegisterScreen from './RegisterForm/RegisterScreen';

import { Link } from "react-router-dom";
// after joke 2
//after joke 3



const App =
    () => {
       return (
        <div>
            <h1>Bookkeeper</h1>
            <nav>
               
                <Link to="/Register"></Link> 
            </nav>
            </div>
           )

    }


export default App;
