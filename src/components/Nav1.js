import React from 'react';
import './nav1.css';

export default function Nav1(props) {
    return (
        <div className="nav1">
            <h1>D&D 5E</h1>
            <ul>
                <button onClick={() => props.getList('races')}>Races</button>
                <button onClick={() => props.getList('classes')}> Classes </button>
                <button onClick={() => props.getList('spells')}> Spells </button>
                <button onClick={() => props.getList('weapons')}> Weapons </button>
                <button onClick={() => props.getList('armor')}> Armor </button>
                <button onClick={() => props.getList('equipment')}> Equipment </button>
            </ul>
        </div>
    );
}