import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
// import { deleteHero } from '../../../server/controllers/hero.controller';



const AllHeros = () => {
    const [allHeros, setAllHeros] = useState([]);
    const [deleteToggle, setDeleteToggle] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/heros")
        .then(response => { 
        console.log(response.data.results)
        setAllHeros(response.data.results)
        })
        .catch(err => console.log("This is your error!", err))
    }, [deleteToggle])

    const deleteHero = (e, id) => {
        console.log("Deleting Hero", id)
        axios.delete(`http://localhost:8000/api/hero/delete/${id}`)
        .then((response) => {
            console.log("Delete was successful", response)
            setDeleteToggle(!deleteToggle);
        })
        .catch(err => console.log("SOmething wrong deleting", err))
    }

  return (
    <div className='container'>
        <h1>All Heros</h1>
        <Link to="/hero/add_hero">Add Hero</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>Hero Name</th>
                    <th scope='col'>Hero Rating</th>
                    <th scope='col'>Hero Image</th>
                    <th scope='col'>Action Items</th>
                </tr>
            </thead>
            <tbody>
                {
                    allHeros.map((h, i) => {
                        return(
                            <tr key={i}>
                                <td>{h.name}</td>
                                <td>{h.rating}</td>
                                <td><img src={h.img} alt="superman image" height="150px"/></td>
                                <td><Link to={`/hero/edit/${h._id}`} className="btn btn-warning">Edit</Link>
                                    <button className='btn btn-danger' onClick={(e) => {deleteHero(e, h._id)}}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  );
}

export default AllHeros;


