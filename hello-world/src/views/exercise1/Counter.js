import React from 'react';

let style = {
    textAlign: 'center',
    fontSize: 25,
    fontStyle: 'bolder',
    color: 'white'
}

export const Counter = (props) =>{
    return (
        <div style = {style}>
            Counter: {props.counter}
        </div>
    );
}