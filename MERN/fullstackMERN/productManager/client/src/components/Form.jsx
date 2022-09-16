import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Form = () => {
  const [formInfo, setFormInfo] = useState({
    title: "",
    price: "",
    description: ""
  });
  const [errors, setErrors] = useState([]);

  const onChangeHandler = (e) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/product/new", formInfo)
      .then(response => {
        console.log(response)
        setFormInfo({
          title: "",
          price: "",
          description: ""
        })
      })
      .catch(err => {
        const errorResponse = err.response.data.err.errors;
        console.log("This is the catch: ", err.response.data.err.errors);
        const errorArr = []
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      })
  }

  return (
    <div className="container">
      <h1>Product Manager</h1>
      <form onSubmit={submitHandler}>
        {
          errors.map((err, i) => <p key={i} className="text-danger">{err}</p>)
        }
        <div className="mb-3 d-flex">
          <label className="form-label">Title:</label>
          <input type="text" className='form-label' name='title' onChange={onChangeHandler} value={formInfo.title} />
        </div>
        <div className="mb-3 d-flex">
          <label className="form-label">Price:</label>
          <input type="number" className='form-label' name='price' step=".01" onChange={onChangeHandler} value={formInfo.price}  />
        </div>
        <div className="mb-3 d-flex">
          <label className="form-label">Description:</label>
          <input type="text" className='form-label' name='description' onChange={onChangeHandler} value={formInfo.description}  />
        </div>
        <div className="mb-3 d-flex">
          <button className='btn btn-primary'>Create</button>
        </div>
      </form>
    </div>
  )
}

export default Form