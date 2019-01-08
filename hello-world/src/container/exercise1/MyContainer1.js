import React, {Component} from 'react';
import {Text} from '../../views/exercise1/Text';
import {Head} from '../../views/exercise1/Head';
import {Counter} from '../../views/exercise1/Counter';
import {DecreaseButton} from '../../views/exercise1/Button'
import {IncreaseButton} from '../../views/exercise1/Button';

export default class MyContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};

        this.increaseCounter = this.increaseCounter.bind(this);
        this.decreaseCounter = this.decreaseCounter.bind(this);
    }

    increaseCounter() {
        this.setState({counter: this.state.counter + 1});
    }

    decreaseCounter() {
        let count = this.state.counter;
        if(count > 0) {
            this.setState({counter: count - 1});
        }
    }

    render() {
        return (
            <div>
                <div style = {{textAlign: 'center', marginBottom: 20}}> <Head /> </div>
                <div> <Text /> </div>
                <div> <Counter counter = {this.state.counter} /> </div>
                <div style = {{textAlign: 'center', marginBottom: 30}}>
                    <IncreaseButton onClick = {this.increaseCounter}/>
                    <DecreaseButton onClick = {this.decreaseCounter}/>
                </div>
            </div>
        );
    }
}
