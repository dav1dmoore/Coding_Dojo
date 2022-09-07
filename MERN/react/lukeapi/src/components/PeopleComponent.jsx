import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import axios from 'axios';
import {
    Routes,
    Route,
    Link 
  } from "react-router-dom";

export const PeopleComponent = () => {
    const [data, setData] = useState({});
    const [homeworld, setHomeworld] = useState("");
    const [homeworldData, setHomeworldData] = useState({});

    const planetId = homeworld.match(/(\d+)/g);
    let intId = parseInt(planetId);

    const {id} = useParams();

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}/?format=json`)
        .then((res) => {
            console.log(res.data);
            setData(res.data)
            setHomeworld(res.data.homeworld)
        })
        .catch((err)=> {
            console.error(err);
            setData({error:"These aren't the droids you're looking for!"})
        });

        axios.get(`${homeworld}`)
        .then((res) => {
            console.log(res.data);
            setHomeworldData(res.data)
            console.log(homeworldData)
        });


    }, [id]);


  return data.error ? (
    <>
    <h1>{data.error}</h1>
    <img src="https://cdn.vox-cdn.com/thumbor/ICjwWQhDmr48CIKabxxQilwTVfg=/0x0:786x393/920x613/filters:focal(331x135:455x259):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65101167/obi-wan.0.0.jpg" alt="" />
    </> ) : (
    <div>
        <h1>Star Wars Crew</h1>
        <h2>Name: {data.name}</h2>
        <h3>Height: {data.height}</h3>
        <h3>Mass: {data.mass}</h3>
        <h3>Hair Color: {data.hair_color}</h3>
        <h3>Skin Color: {data.skin_color}</h3>
        <h3>Homeworld: <Link to={`/planets/${intId}`}>{homeworldData.name}</Link></h3>
    </div>
  )
}

export default PeopleComponent