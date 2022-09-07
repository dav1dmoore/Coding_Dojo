import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import axios from 'axios';

export const PlanetComponent = () => {
    const [data, setData] = useState({});

    const {id} = useParams();

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}/?format=json`)
        .then((res) => {
            console.log(res.data);
            setData(res.data);
        })
        .catch((err)=> {
            console.error(err);
            setData({error:"These aren't the droids you're looking for!"});
        })
    }, [id]);

  return data.error ? (
    <>
    <h1>{data.error}</h1>
    <img src="https://cdn.vox-cdn.com/thumbor/ICjwWQhDmr48CIKabxxQilwTVfg=/0x0:786x393/920x613/filters:focal(331x135:455x259):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65101167/obi-wan.0.0.jpg" alt="" />
    </>
    ) : (
    <div>
        <h1>Star Wars Planet</h1>
        <h2>Name: {data.name}</h2>
        <h3>Climate: {data.climate}</h3>
        <h3>Terrain: {data.terrain}</h3>
        <h3>Surface Water: {data.surface_water}</h3>
        <h3>Population: {data.population}</h3>
    </div>
  )
}

export default PlanetComponent