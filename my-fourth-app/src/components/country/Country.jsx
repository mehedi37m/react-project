import React, { useState } from 'react';
import Countries from '../countries/Countries';
import "./Country.css"
import CountryData from '../CountryData/CountryData';

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    
    const {name, flags, population,cca3} = country;
    const {common} = name; 
   
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

   
    
    return (
      <>
      
      
      <div className={ `${visited && 'visit'} border border-sky-500 p-5 rounded-lg text-center  my-5`}>
           <h3 className='text-lg font-bold mb-4'>name : {common}</h3>
           <img className='h-32 text-center' src={flags.png} alt="" />
           <p>population : {population}</p>
           <p>code : {cca3}</p>

           <button onClick={() => handleVisitedFlags(country)} className='btn btn-circle'>add flag</button>

           <button onClick={() => 
            handleVisitedCountries(country) } className='btn btn-accent'>mark</button>

           <button onClick={handleVisited} className='btn btn-primary mt-7 mr-2'>{visited ? 'visited' : 'i want to going'}</button>
          {visited ? 'visited' : 'i want to visit'}

          <hr />

          <CountryData country={country}
           handleVisitedCountries = {handleVisitedCountries}
           handleVisitedFlags = {handleVisitedFlags}
          
          ></CountryData>
                
        </div>
       
      </>
    );
};

export default Country;