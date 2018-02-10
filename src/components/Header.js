import React from 'react';
import './header.css';

export default function Header(){
    return (
        <div className="header">
            <button>Home</button>
            <button>About</button>
            <button>Contact</button>
            <button>Donate</button>
        </div>
    );
}