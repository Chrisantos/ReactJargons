import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import SearchBox from '../views/searchBox';

class GitApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <SearchBox />
            </div>
        );
    }
}

export default GitApp;