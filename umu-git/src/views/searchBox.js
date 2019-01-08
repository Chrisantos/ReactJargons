import React, {Component} from 'react';

const style = {
    width: "60%",
    marginLeft: 50,
    marginRight: 50,
    textAlign: "center"
}

let results = [];
async function fetchResults(url) {
    const resp = fetch(url);
    const data = await resp.json();
    let authors = data.results; // Get the results
    return authors.map(function(author, index) { // Map through the results and for each run the code below
                // <div>
                //     <h2>{author.name.first} {author.name.last}</h2>
                //     <img src= {author.picture.medium} />
                // </div>
                console.log(author.name.first);
                results[index] = author.name.first;
                
    });
}

class SearchBox extends Component {
    constructor(props) {
        super(props);

    }

    processChange(e) {
        const username = e.target.value;
        
    }

    render() {

        let result = [];

        const url = "https://randomuser.me/api/?results=5";

        // fetch(url)
        // .then((resp) => resp.json()) // Transform the data into json
        // .then(function(data) {
        //     let authors = data.results; // Get the results
        //     let results = authors.map(function(author, index) { // Map through the results and for each run the code below
        //         // <div>
        //         //     <h2>{author.name.first} {author.name.last}</h2>
        //         //     <img src= {author.picture.medium} />
        //         // </div>
        //         console.log(author.name.first);
        //         result[index] = author.name.first;
                
        //       })
        //  })

        fetchResults(url);

        return(
            <div>
                <input type= "search" style= {style} onChange= {this.processChange}/>
                <div>{result}</div>
            </div>
        );
    }
}

export default SearchBox;