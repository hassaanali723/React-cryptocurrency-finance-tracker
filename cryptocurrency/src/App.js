import React, {useEffect,useState} from 'react';
import './App.css';
import axios from 'axios';


function App() {
   const [coins,setCoins] = useState([]);

  useEffect(() => {
    axios
    .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then(res => {
       setCoins(res.data);
       console.log(res.data);
    }).catch( error => alert("Error"))
  
  },[])

 

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="search-text">Search Coin</h1>
        <form>
          <input type="search" placeholder="Search" 
          className="search-input">
          </input>

        </form>
      </div>

    </div>
  );
}

export default App;
