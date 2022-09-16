import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Main = () => {
    const [productDetails, setProductDetails] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(response => {
        console.log(response.data.results)
        setProductDetails(response.data.results)
        })
        .catch(err => console.error(err));
    }, [id])
    
    return (
    <div className="container">
        <h1>{productDetails.title}</h1>
        <h3>Price: ${productDetails.price}</h3>
        <h3>Description: {productDetails.description}</h3>
        <Link to="/" className="btn btn-warning" >Cancel</Link>
    </div> 
    )
}

export default Main