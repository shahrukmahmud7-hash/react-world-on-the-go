
import React, { useState } from 'react';
import { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
   const [visitedCountries, setVisitedCountries] = useState([])

   const [visitedFlags , setVisitedFlags] = useState([])

  const handelVisitedCountries = (country) => {

    console.log('visited country count', country)
  const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries)
  }   

  const handleVisitedFlags = (flag) => {
      console.log("added to the flags");
      const NewFlags = [...visitedFlags, flag ]
      setVisitedFlags(NewFlags);
  }

   const countriesData = use(countriesPromise);
   const countries = countriesData.countries;
   console.log(countries)

    return (
        <div>
          <h2>In The Countries : {countries.length}</h2>
          <h3>Totall country count : {visitedCountries.length} </h3>
          <h3>Total Flags Visited : {visitedFlags.length}</h3>
          <ol>
            {
              visitedCountries.map(country => <li
                key={country.cca3.cca3}
              >{country.name.common}</li>)
            }
         </ol> 
            
            <div className='visited-flags-container'>
              {
                visitedFlags.map((flag, index) => <img key={index} src = {flag}></img>)
              }
            </div>

          <div className='countries'>
                {
            countries.map(country => <Country 
              key={country.cca3.cca3}  
             country={country} handelVisitedCountries={handelVisitedCountries} 
             handleVisitedFlags={handleVisitedFlags}
             ></Country>)
          } 
          </div>
        </div>
    );
};

export default Countries; 