import React from 'react';
const Home = () =>{
    return (
        <div style = {{textAlign: 'center'}}>
            <h1 style = {{color: 'white', marginTop: -5}}>Welcome to CernPeek</h1>
            <img src = {require('../../images/nigeria.jpg')} style = {{height: '28%', width: '45%'}} />
            <div style= {{textAlign: 'left'}}>
                <p style= {{color: 'white', fontFamily: 'cursive'}}>Each time I travel into a new city/state in Nigeria, the first thing I wanna do is to look for beautiful tourist places I could explore, be it man-made or natural. And it’s not always easy getting the right info about where to visit. So I decided to make things easier for others like me who will like to explore Nigeria. Trust me Nigeria is beautiful!. And CernPeek is the place to learn, explore and go on an adventure around our country Nigeria. Here is a state by state list of places you can explore in Nigeria:</p>
            </div>
        </div>
    );
}

export default Home;