import React from 'react';
import { useParams } from 'react-router';
import {
    Routes,
    Route,
    Link 
  } from "react-router-dom";

const Teams = () => {
    const {city} = useParams();

    return (
        <div>
            <h1>Teams</h1>
            <h3>Welcome to our {city}</h3>
        </div>
    );
}
export default Teams