import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const Edit = () => {
  const [formInfo, setFormInfo] = useState({
    title: "",
    price: "",
    description: ""
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then(response => {
        console.log(response)
        setFormInfo(response.data.results)
      })
      .catch(err => console.log("Edit page get request: ", err))
  }, [id])

  const submitHandler = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:8000/api/product/update/${id}`, formInfo)
      .then(response => {
        console.log("Edit put request", response)
        navigate(`/product/${id}`)
      })
      .catch(err => console.log("Error updating Super Hero", err))
  }

  return (
    <div className="container">
      <h1>Product Manager</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3 d-flex">
          <label className="form-label">Title:</label>
          <input type="text" className='form-label' name='title' value={formInfo.title} onChange={onChangeHandler} />
        </div>
        <div className="mb-3 d-flex">
          <label className="form-label">Price:</label>
          <input type="number" className='form-label' name='price' step=".01" value={formInfo.price} onChange={onChangeHandler} />
        </div>
        <div className="mb-3 d-flex">
          <label className="form-label">Description:</label>
          <input type="text" className='form-label' name='description' value={formInfo.description} onChange={onChangeHandler} />
        </div>
        <div className="mb-3 d-flex">
          <Link to={`/product/${id}`} className="btn btn-warning" >Cancel</Link>
          <button className='btn btn-primary'>Update</button>
        </div>
      </form>
    </div>
  )
}

export default Edit