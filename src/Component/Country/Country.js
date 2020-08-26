import React from 'react';

const Country = (props) => {
    const {name, flag, population, region} = props.country;
    const handleAddCountry = props.handleAddCountry;
    const flagStl = {
        height: "50px"
    }
    return (
        <div>
            <h4>This is {name}</h4>
            <img style={flagStl} src={flag}/>
            <p>Population: {population}</p>
            <p>Region: {region} </p>
            <button onClick={()=> handleAddCountry(props.country)} >Add Country</button>
        </div>
    );
};

export default Country;