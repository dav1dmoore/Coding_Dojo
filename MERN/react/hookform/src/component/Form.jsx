import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from 'react';

const Form = () => {
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");
    
    let [firstNameError, setFirstNameError] = useState("");
    let [lastNameError, setLastNameError] = useState("");
    let [emailError, setEmailError] = useState("");
    let [passwordError, setPasswordError] = useState("");
    let [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value != "" && e.target.value.length < 2){
            setFirstNameError("First Name Must Be Atleast 2 Characters!")
        } else {
            setFirstNameError("")
        }
        if(e.target.value != "" && e.target.value.length < 2){
            setFirstNameError("First Name Must Be Atleast 2 Characters!")
        } else {
            setFirstNameError("")
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value != "" && e.target.value.length < 2){
            setLastNameError("Last Name Must Be Atleast 2 Characters!")
        } else {
            setLastNameError("")
        }
        if(e.target.value != "" && e.target.value.length < 2){
            setLastNameError("Last Name Must Be Atleast 2 Characters!")
        } else {
            setLastNameError("")
        }
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value !="" && e.target.value.length < 5){
            setEmailError("Email Must Be At Least 5 Characters!");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value !="" && e.target.value.length < 8){
            setPasswordError("Password Must Be At Least 8 Characters!");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirm = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value == "" || e.target.value == password){
            setConfirmPasswordError("");
        } else if(e.target.value != password) {
            setConfirmPasswordError("Passwords must match and be at least 8 characters!")
        }
    }



    return (
    <div>
        <form onSubmit={ (e) => e.preventDefault() } className="form">
                <div className="form-group">
                    <label>First Name:</label>
                    <input onChange={handleFirstName} type="text" className="form-control"/>
                    { firstNameError ? <p style={{color:'red'}}>{firstNameError}</p> : "" }
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input onChange={handleLastName} type="text" className="form-control"/>
                    { lastNameError ? <p style={{color:'red'}}>{lastNameError}</p> : "" }
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input onChange={handleEmail} type="email" className="form-control"/>
                    { emailError ? <p style={{color:'red'}}>{emailError}</p> : "" }
                    
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input onChange={handlePassword} type="password" className="form-control"/>
                    { passwordError ? <p style={{color:'red'}}>{passwordError}</p> : "" }
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input onChange={handleConfirm} type="password" className="form-control"/>
                    { confirmPasswordError ? <p style={{color:'red'}}>{confirmPasswordError}</p> : "" }
                </div>
                <div>
                <input type="submit" value="Submit" />
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