import React, {Component} from 'react';
import {Link, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../../views/exercise2/home';
import Explore from '../../views/exercise2/explore';

const homeLinkStyle = {
    color: "rgb(4, 92, 92)", 
    textDecoration: "none", 
    fontWeight: 'bold'
};

const peekLinkStyle = {
    color: "rgb(4, 92, 92)", 
    textDecoration: "none", 
    fontWeight: 'bold',
    marginLeft: 20
};

class CernApp extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>

                <div style= {{backgroundColor: "white", width: 150, padding: 5}}>
                    <Link to= "/" style= {homeLinkStyle}>Home</Link>
                    <Link to= "/explore" style= {peekLinkStyle}>Explore</Link>
                </div>

                <Switch>
                    <Route exact path= "/" component= {Home} />
                    <Route path= "/explore" component= {Explore}/>
                </Switch>
                
            </div>
        );
    }
}

export default CernApp;

//Allow me guide you explore the beauty of Nigeria >>