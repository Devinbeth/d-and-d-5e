import React from 'react';
import './nav1.css';

export default function Nav1(props) {
    return (
        <div className="nav1">
            <h1>D&D 5E</h1>
            <button onClick={() => props.getNav1List('races')}>Races</button>
            <button onClick={() => props.getNav1List('classes')}> Classes </button>
            <button onClick={() => props.getNav1List('spells')}> Spells </button>
            <button onClick={() => props.getNav1List('weapons')}> Weapons </button>
            <button onClick={() => props.getNav1List('armor')}> Armor </button>
            <button onClick={() => props.getNav1List('equipment')}> Equipment </button>
        </div>
    );
}