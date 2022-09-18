import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const Table = (props) => {

    const { removeFromDOM } = props;

    const deleteAuthor = (e, id) => {
        axios.delete(`http://localhost:8000/api/author/delete/${id}`)
            .then((response) => {
                removeFromDOM(id)
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="container">
            <Link to={"/new"}>Add an author</Link>
            <table>
                <thead>
                    <th>Author</th>
                    <th>Actions available</th>
                </thead>
                <tbody>
                    {
                        props.allAuthors.sort((a, b) => a.name < b.name ? -1 : 1).map((author, i) =>
                            <tr key={i}>
                                <td>{author.name}</td>
                                <td>
                                    <Link to={`/edit/${author._id}`}>{author.name}</Link> |
                                    <DeleteButton id={author._id} removeFromDOM={removeFromDOM}/> 
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table