import React, {Component} from 'react';
import {StateName} from './stateName';

export class DropDown extends Component {
    constructor(props) {
        super(props);

        this.state = {name: 'Abia'};
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(e){
        this.setState({name: e.target.value});
    }

    render() {
        return(
            <div>
                <StateName name = {this.state.name}/>
                <div style = {{textAlign: 'center', marginTop: 30}}>
                    <p style = {{marginLeft: -400, color: 'white', fontWeight: 'bold'}}>What state?</p>
                    <select name="states" id="states" style = {{width: 500, height: 50}} onChange = {this.handleSelect}>
                        <option value="abia">Abia</option>
                        <option value="Adamawa">Adamawa</option>
                        <option value="Anambra">Anambra</option>
                        <option value="Akwa Ibom">Akwa Ibom</option>
                        <option value="Bauchi">Bauchi</option>
                        <option value="Bayelsa">Bayelsa</option>
                        <option value="Benue">Benue</option>
                        <option value="Borno">Borno</option>
                        <option value="Cross River">Cross River</option>
                        <option value="Delta">Delta</option>
                        <option value="Ebonyi">Ebonyi</option>
                        <option value="Enugu">Enugu</option>
                        <option value="Edo">Edo</option>
                        <option value="Ekiti">Ekiti</option>
                        <option value="FCT - Abuja">FCT - Abuja</option>
                        <option value="Gombe">Gombe</option>
                        <option value="Imo">Imo</option>
                        <option value="Jigawa">Jigawa</option>
                        <option value="Kaduna">Kaduna</option>
                        <option value="Kano">Kano</option>
                        <option value="Katsina">Katsina</option>
                        <option value="Kebbi">Kebbi</option>
                        <option value="Kogi">Kogi</option>
                        <option value="Kwara">Kwara</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Nasarawa">Nasarawa</option>
                        <option value="Niger">Niger</option>
                        <option value="Ogun">Ogun</option>
                        <option value="Ondo">Ondo</option>
                        <option value="Osun">Osun</option>
                        <option value="Oyo">Oyo</option>
                        <option value="Plateau">Plateau</option>
                        <option value="Rivers">Rivers</option>
                        <option value="Sokoto">Sokoto</option>
                        <option value="Taraba">Taraba</option>
                        <option value="Yobe">Yobe</option>
                        <option value="Zamfara">Zamfara</option>
                    </select>
                </div>
            </div>
            
        );
    }
    
}