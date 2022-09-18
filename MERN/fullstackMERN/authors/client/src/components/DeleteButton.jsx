import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteButton = (props) => {

    const { removeFromDOM } = props;
    const { id } = props

    const deleteAuthor = (e, id) => {
        axios.delete(`http://localhost:8000/api/author/delete/${id}`)
            .then((response) => {
                removeFromDOM(id)
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="container">
            <button onClick={(e) => { deleteAuthor(e, id) }}>
                Delete
            </button>
        </div>
    )
}

export default DeleteButton