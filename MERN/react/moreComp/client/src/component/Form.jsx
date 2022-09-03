import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from 'react';

const Form = () => {
    let [name, setName] = useState("");
    let [type, setType] = useState("");
    let [age, setAge] = useState("");
    let [image, setImage] = useState("");

    return (
        <div>
            <h1>Fill out this form</h1>
            <form action="">
                <div className="form-group">
                    <label>Pet Name:</label>
                    <input onChange={(e) => setName(e.target.value)} type="text" className="form-control"/>
                    {
                        name.length < 3 && name.length > 0 ? <p className="text-danger">Name must be 3 characters long!</p> : ""
                    }
                </div>
                <div className="form-group">
                    <label>Pet Type:</label>
                    <input onChange={(e) => setType(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Pet Age:</label>
                    <input onChange={(e) => setAge(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Pet Image:</label>
                    <input onChange={(e) => setImage(e.target.value)} type="text" className="form-control"/>
                </div>
            </form>
            <hr />
            <p>Your Pet Info:</p>
            <p>Name: {name}</p>
            <p>Pet Type: {type}</p>
            <p>Age: {age}</p>
            <p>Image: <img src={image} alt="Image" /></p>
        </div>
    )
}

export default Form;
