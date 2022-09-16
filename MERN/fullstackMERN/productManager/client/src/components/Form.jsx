import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AllProducts from './/AllProducts'
import {useNavigate, Link} from 'react-router-dom';

const Form = () => {
  const [formInfo, setFormInfo] = useState({
    title: "",
    price: "",
    description: ""
});
const navigate = useNavigate();

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
        navigate("/");
    })
    .catch(err => console.log('This is your error: ', err))
}



  return (
    <div className="container">
      <h1>Product Manager</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3 d-flex">
          <label className="form-label">Title:</label>
          <input type="text" className='form-label' name='title' onChange={onChangeHandler} />
        </div>
        <div className="mb-3 d-flex">
          <label className="form-label">Price:</label>
          <input type="number" className='form-label' name='price' step=".01" onChange={onChangeHandler} />
        </div>
        <div className="mb-3 d-flex">
          <label className="form-label">Description:</label>
          <input type="text" className='form-label' name='description' onChange={onChangeHandler} />
        </div>
        <div className="mb-3 d-flex">
          <button className='btn btn-primary'>Create</button>
        </div>
      </form>
    </div>
  )
}

export default Form