import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/navbar.css';

const Navbar = ({size, setShow}) => {
    return (
        <nav>
            <div className='nav_box'>
                <span className='idk' onClick={() => {setShow(true)}}>
                    Home
                </span>
                <div className='cart' onClick={() => { setShow(false)}}>
                    <i className='fas fa-cart-plus'></i>
                    <span>{size}</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
