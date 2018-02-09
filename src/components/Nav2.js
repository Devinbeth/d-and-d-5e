import React from 'react';
import './nav2.css';

export default function Nav2(props) {
    return (
        <div className="race">
            {props.selection.map(e => <button key={e.url} onClick={() => props.getNav2List(e.url)}>{e.name}</button>)}
        </div>
    )
}