import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const AllProducts = (props) => {

  return (
    <div className="container">
      {/* <h1>All Products</h1>
      {
        allProducts.map((product, i) => {
          return (
            <p key={i}>{product.name}</p>
          )
        })
      } */}

      {
        props.allProducts.map((product, i) => 
        <p key={i}>
          <Link to={`/product/${product._id}`}>{product.title}</Link>
        </p>)
      }
      
    </div>
  )
}

export default AllProducts