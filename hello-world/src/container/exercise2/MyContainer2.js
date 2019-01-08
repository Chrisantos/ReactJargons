import React, {Component} from 'react';
import {DropDown} from '../../views/exercise2/dropdown';
import {StateName} from '../../views/exercise2/stateName';

export default class MyContainer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <StateName />
                <DropDown />
            </div>
        );
    }
}