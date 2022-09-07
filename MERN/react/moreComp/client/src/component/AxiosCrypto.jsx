import React, {useState} from 'react';
import axios from 'axios';

const AxiosCrypto = () => {

    const [coin, setCoin] = useState([]);

    const fetchData = () => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then((response) => {
            console.log(response.data);
            setCoin(response.data);
        })
        .catch((err)=>{
            console.log("This is the catch all error: ", err)
        })
        console.log("I am texting a friend while the dog is fetching or I am running other tasks.")
    }

    return (
        <div>

        <h1>Fetch API</h1>
        <button onClick={fetchData}>Click Me Fo Crypto Data!</button>
        {
            coin.map((c, idx) => {
                return (
                    <div key={idx}>
                        <img src={c.image} alt="crypto pic" height="100px" />
                        <h3>{c.name}</h3>
                        <h4>{c.current_price}</h4>
                    </div>
                )
            })
        }
        </div>
    )
}

export default FetchAPI