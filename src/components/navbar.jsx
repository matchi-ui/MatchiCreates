import React from 'react';
import {Link} from 'react-router-dom';
import './css/navbar.css';

const Navbar = () =>{
    return(
        <nav className='nav navbar-expand-md d-flex flex-row justify-content-around p-3'>
            {/*Navbar Brand*/}
            <span className='nav navbar-brand'>
                <p>
                    <span className='navbar-brand text1'>Matchi</span>
                    <span className='navbar-brand text2'>Creates</span>
                    <span className='navbar-brand text1'>.</span></p>
            </span>
            {/*Navbar Links*/}
            <ul className='d-flex flex-row'>
                <li className='mx-2'>
                    <Link to="/" className='navLink'>Home</Link>
                </li>
                <li className='mx-5'> 
                    <Link to="/projects" className='navLink'>Projects</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;