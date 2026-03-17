import React, { useState } from 'react';
import './country.CSS'

const Country = ({ country, handelVisitedCountries , handleVisitedFlags }) => {
    // console.log(country.area.area);
    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        // firts Op
    //    if(visited){
    //     setVisited(false)
    //    } 
    //    else {
    //          setVisited(true)
    //    }
        // 2nd Op 
    // setVisited (visited ? true : false);
    // third 
    setVisited(!visited);
    handelVisitedCountries(country);

    }

    return (
        <div className={`country ${ visited && 'country-visited'} `}>
            <img src={country?.flags?.flags?.png} alt={country?.name.common}/>
            <h3>Name : {country?.name.common}</h3> 
            <p>Population : {country?.population?.population}</p>
            <p> Area :: {country.area.area} {
            country.area.area > 300000 ? "Big Country" : "Small Country"} </p>
            <button onClick={handleVisited}>{
               visited ? "visited" : "Not Visited"
                }</button>
            <button onClick={() => handleVisitedFlags(country?.flags?.flags?.png)}>Visited Flags</button>    
        </div>
    );
};

export default Country;