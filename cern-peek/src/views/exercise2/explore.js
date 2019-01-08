import React, {Component} from 'react';
import DropDown from '../../views/exercise2/dropdown';
import StateName from '../../views/exercise2/stateName';
import stateDetails from '../../views/exercise2/stateDetails';
import StateDetails from '../../views/exercise2/stateDetails';

class Peek extends Component {
    render() {
        return(
            <div>
                <StateName />
                <DropDown />
                <StateDetails />
            </div>
        );
    }
}

export default Peek;