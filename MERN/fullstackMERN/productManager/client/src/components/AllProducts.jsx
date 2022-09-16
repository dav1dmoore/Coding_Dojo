import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProducts = (props) => {
  
  const {removeFromDom} = props;

  const deleteProduct = (e, id) => {
    axios.delete(`http://localhost:8000/api/product/delete/${id}`)
    .then((response) => {
      removeFromDom(id)
    })
    .catch(err => console.error(err));
  }

  return (
    <div className="container">
      <h1>All Products</h1>
      {
        props.allProducts.map((product, i) =>
          <p key={i}>
            <Link to={`/product/${product._id}`}>{product.title}</Link> | 
            <button onClick={(e) => { deleteProduct(e, product._id) }}>
               Delete
            </button>
          </p>)
      }

    </div>
  )
}

export default AllProducts