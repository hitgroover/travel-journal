import React from 'react';
import logo from '../image/logo.svg';

export default function Header() {
    return (
        <div className='header'>
            <img className='header-logo' src={logo} alt='logo' />
            <h1 className='logo-text'>my travel journal.</h1>
        </div>
    )
}