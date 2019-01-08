import React from 'react';
import details from './details';

let placeArr = [];
const StateDetails = (props) =>{
    details.map((data) =>{
        if(data.name === props.name){

            data.places.forEach((place, index) =>{
                placeArr[index] = <li>{place}</li>;
            })
        
        }
            
    })

    
    
            
    let state = details.map((data) =>{
        if(data.name === props.name){
            let image = data.image;
            if(image.length > 0){
                return(
                    <div style={{textAlign: 'center', marginTop: 40, color: 'white'}}>
                        <img src = {require(`../../images/${image}`)} style = {{height: '25%', width: '40%',}} />
                        <h3>Recreational Centres</h3>
                        <ul style= {{textAlign: 'left', fontFamily: 'cursive', marginLeft: 480}}>
                            {placeArr}
                        </ul>
    
                    </div>
                );
            } else{
                return(
                    <div style={{textAlign: 'center', marginTop: 40, color: 'white'}}>
                        <h2 style = {{margin: 80, color: 'red'}}>No Image</h2>
                        <h3>Recreational Centres</h3>
                        <ul style= {{textAlign: 'left', fontFamily: 'cursive', marginLeft: 480}}>
                            {placeArr}
                        </ul>
    
                    </div>
                );
            }
            
        }
            
    });

    return (
        <div>{state}</div>
    );
}

export default StateDetails;

//<div>{props.details}</div>
