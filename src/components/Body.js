import React from 'react';
import './body.css';

export default function Body(props) {
    return (
        <div className="body">
            <h5>{JSON.stringify(props.item)}</h5>
        </div>
    );
}