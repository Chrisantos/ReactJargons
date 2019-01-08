import React from 'react';

let button = {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
}

export const DecreaseButton = (props) =>{
    return (
        <button onClick = {props.onClick} style = {button}>decrease</button>
    );
}

export const IncreaseButton = (props) =>{
    return (
        <button onClick = {props.onClick}style = {button}>increase</button>
    );
}