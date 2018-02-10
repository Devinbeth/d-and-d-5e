import React from 'react';
import './nav1.css';

export default function Nav1(props) {
    return (
        <div className="nav1">
            <h1>D&D 5E</h1>
            <button onClick={() => props.nav1('races')}>Races</button>
            <button onClick={() => props.nav1('classes')}> Classes </button>
            <button onClick={() => props.nav1('spells')}> Spells </button>
            <button onClick={() => props.nav1('weapons')}> Weapons </button>
            <button onClick={() => props.nav1('armor')}> Armor </button>
            <button onClick={() => props.nav1('equipment')}> Equipment </button>
        </div>
    );
}