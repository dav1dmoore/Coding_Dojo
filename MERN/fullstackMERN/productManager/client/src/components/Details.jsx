import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const Main = () => {
    const [productDetails, setProductDetails] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(response => {
        console.log(response.data.results)
        setProductDetails(response.data.results)
        })
        .catch(err => console.error(err));
    }, [id])

    const deleteProduct = (e, id) => {
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
        .then((response) => {
            console.log(navigate)
            navigate("/")
        })
        .catch(err => console.error(err));
      }
    
    return (
    <div className="container">
        <h1>{productDetails.title}</h1>
        <h3>Price: ${productDetails.price}</h3>
        <h3>Description: {productDetails.description}</h3>
        <Link to="/" className="btn btn-warning" >Cancel</Link> | 
        <button className="btn btn-secondary" onClick={(e) => { deleteProduct(e, productDetails._id) }}>
               Delete
            </button> | 
            <Link to={`/${productDetails._id}/edit`} className="btn btn-primary">Edit</Link>
    </div> 
    )
}

export default Main