import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const AuthorEditForm = () => {
    const [formInfo, setFormInfo] = useState({
        title: ""
    });
    const { id } = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const onChangeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value,
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(response => {
                console.log(response)
                setFormInfo(response.data.results)
            })
            .catch(err => console.log("Edit page get request: ", err))
    }, [id])

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/author/update/${id}`, formInfo)
            .then(response => {
                console.log("Edit put request", response)
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
            <p>Edit this author:</p>
            <form onSubmit={submitHandler}>
                {
                    errors.map((err, i) => <p key={i} className="text-danger">{err}</p>)
                }
                <div className="mb-3 d-flex">
                    <label className="form-label">Name:</label>
                    <input type="text" className='form-label' name='name' value={formInfo.name} onChange={onChangeHandler} />
                </div>
                <div className="mb-3 d-flex">
                    <Link to={"/"} className="btn btn-warning" >Cancel</Link>
                    <button className='btn btn-primary'>Update</button>
                </div>
            </form>
        </div>
    )
}

export default AuthorEditForm