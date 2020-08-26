import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './Component/Country/Country';
import Cart from './Component/Cart/Cart';

function App() {
  const [country, setCountry] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=> res.json())
    .then(data=> setCountry(data))
  }, [])

  const handleAddCountry = (country) => {
  const newCart = [...cart, country];
  setCart(newCart);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Country Loaded: {country.length} </h1>
        <Cart name={cart}></Cart>
        <h3>Country added: {cart.length} </h3>
        
        {
          country.map(cntr => <Country handleAddCountry={handleAddCountry} country={cntr} key={cntr.alpha3Code} ></Country> )
        }
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
