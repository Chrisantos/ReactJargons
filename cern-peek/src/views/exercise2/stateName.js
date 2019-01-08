import React from 'react';

const style = {
    textAlign: 'center', 
    fontSize: 40, 
    marginTop: 30, 
    marginBottom: 30,
    color: 'white'
}
const StateName = (props) =>{
    return (
        <h1 style = {style}>{props.name}</h1>
    );
}

export default StateName;