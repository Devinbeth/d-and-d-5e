import React from 'react';
import './body.css';

export default function Body(props) {
    return (
        <div className="body">
            {props.item}
        </div>
    );
}