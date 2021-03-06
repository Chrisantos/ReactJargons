import React from 'react';
import {Link, Route} from 'react-router-dom';
import Product from './product';

const productsData = [
    {
      id: 1,
      name: 'NIKE Liteforce Blue Sneakers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
      status: 'Available'
    
    },
    {
      id: 2,
      name: 'Stylised Flip Flops and Slippers',
      description: 'Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.',
      status: 'Out of Stock'
    
    },
    {
      id: 3,
      name: 'ADIDAS Adispree Running Shoes',
      description: 'Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.',
      status: 'Available'
    },
    {
      id: 4,
      name: 'ADIDAS Mid Sneakers',
      description: 'Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.',
      status: 'Out of Stock'
    },
    
];

const Products = ({match}) =>{
    let linkList = productsData.map((product) =>{
        return(
            <li>
              <Link to={`${match.url}/${product.id}`}>
                {product.name}
              </Link>
            </li>
        );
    })

    return(
        <div>
            <div>
             <div>
               <h3> Products</h3>
               <ul> {linkList} </ul>
             </div>
            </div>
    
            <Route path={`${match.url}/:productId`}
                render={ (props) => <Product data= {productsData} {...props} />}/>
            <Route exact path={match.url}
                render={() => (<div>Please select a product.</div>)}/>
        </div>
    )
}

export default Products;

//You may have expected component = { Product } instead of the inline render function. 
//The problem is that we need to pass down productsData to the Product component along with all 
//the existing props. Although there are other ways you can do this, I find this method to be the easiest. 
//{...props} uses the ES6’s spread syntax to pass the whole props object to the component. 