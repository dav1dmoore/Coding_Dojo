import React, { useState } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const AuthorForm = () => {
    const [authorName, setAuthorName] = useState({
        name: ""
    });
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        setAuthorName({[e.target.name]: e.target.value})
        // setFormInfo({
        // setFormInfo({
        //     ...formInfo,
        //     [e.target.name]: e.target.value,
        // })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/author/new", authorName)
            .then(response => {
                console.log(response)
                setAuthorName({name:""});
                navigate("/")
            })
            .catch(err => {
                const errorResponse = err.response.data.err.errors;
                const errorArr = []
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            })
    }

    return (
        <div className="container">
            <Link to={"/"}>Home</Link>
            <p>Add a new author:</p>
            <form onSubmit={submitHandler}>
                {
                    errors.map((err, i) => <p key={i} className="text-danger">{err}</p>)
                }
                <div className="mb-3 d-flex">
                    <label className="form-label">Name:</label>
                    <input type="text" className='form-label' name='name' onChange={onChangeHandler} value={authorName.name} />
                </div>
                <div className="mb-3 d-flex">
                    <Link to={"/"} className="btn btn-primary" >Cancel</Link>
                    <button className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AuthorForm