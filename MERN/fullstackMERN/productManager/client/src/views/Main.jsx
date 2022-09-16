import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from '../components/Form'
import AllProducts from '../components/AllProducts'

const Main = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [loaded, setloaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then(response => { 
        setAllProducts(response.data.results);
        setloaded(true);
        })
        .catch(err => console.error(err));
    })

    const removeFromDOM = productId => {
        setAllProducts(allProducts.filter(product => product._id !== productId))
    }
    return (
    <div className="container">
        <Form/>
        <hr />
        <AllProducts allProducts={allProducts} removeFromDOM={removeFromDOM}/> 
    </div> 
    )
}

export default Main