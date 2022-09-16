import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from '../components/Form'
import AllProducts from '../components/AllProducts'

const Main = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then(response => { 
        console.log(response.data.results)
        setAllProducts(response.data.results)
        setLoaded(true)
        })
        .catch(err => console.error(err));
    })
    
    return (
    <div className="container">
        <Form/>
        <hr />
        {<AllProducts allProducts={allProducts}/>}  
    </div> 
    )
}

export default Main