import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from 'react';

const Form = () => {
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");

    return (
    <div>
        <form action="" className="form">
                <div className="form-group">
                    <label>First Name:</label>
                    <input onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input onChange={(e) => setLastName(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" className="form-control"/>
                </div>
        </form>
        <hr/>
        <p>Your Form Data</p>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>

    </div>
    )
};

export default Form;