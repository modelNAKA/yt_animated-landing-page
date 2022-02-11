import React from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import logo from '../img/logo.svg';
import { Fade } from 'react-reveal';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Register from "./login/register";
import Login from "./login/login";


function Navigation() {
    return (
        <Fade top>
        <NavigationStyled>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Donate</a>
                </li>
                <li>
                    <a href="">Contact Us</a>
                </li>
            </ul>
            <Router>
                <Routes>
                    <Route path="/Login" element={< Login />} />
                    <Route path="/Register" element={<Register />} />
                </Routes>
            </Router>
            <PrimaryButton name={'Login'} />
        </NavigationStyled>
        </Fade>
    )
}


const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    align-items: center;

    ul{
        display: flex;
        justify-content: space-between;
        width: 40%;
    }
`;
export default Navigation
