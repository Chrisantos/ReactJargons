import React, {Component} from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style = {{textAlign: 'center'}}>
                <h1 style = {{color: 'white'}}>Welcome to cernPeek</h1>
                <img src = {require('./background.jpg')} style = {{height: '35%', width: '55%'}} />

                <p style = {{fontStyle: 'italic'}}>
                    <a href = './index2.html' style = {{color: 'white', marginTop: 30, textDecoration: 'none'}} > >> Allow me guide you explore the beauty of Nigeria >> </a>
                </p>
            </div>
        );
    }
}