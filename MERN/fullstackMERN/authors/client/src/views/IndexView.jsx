import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Table from '../components/Table';

const IndexView = () => {
    const [allAuthors, setAllAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
        .then(response => { 
        setAllAuthors(response.data.results);
        })
        .catch(err => console.error(err));
    }, [allAuthors])

    const removeFromDOM = authorId => {
        setAllAuthors(allAuthors.filter(author => author._id !== authorId))
    }

    return (
    <div className="container">
        <Table allAuthors={allAuthors} removeFromDOM={removeFromDOM}/>
    </div> 
    )
}

export default IndexView