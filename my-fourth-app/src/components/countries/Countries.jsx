import React, { useEffect, useState } from "react";
import Country from "../country/Country";
import CountryData from "../CountryData/CountryData";

const Countries = () => {
  const [countries, setCountry] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitFlags, setVisitedFlags] = useState([]);

  

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

const handleVisitedCountries = (country) => {
  const newVisitedCountries = [...visitedCountries, country];
  setVisitedCountries(newVisitedCountries);

}

const handleVisitedFlags = (flag) => {
 console.log(flag)
 const newVisitedFlags = [...visitFlags, flag];
 setVisitedFlags(newVisitedFlags);
}


  return (
    <div >
      <h3 className="text-5xl font-bold ">Countries : {countries.length} </h3>
      <div>
        <h3>visited countries : {visitedCountries.length}</h3>
        {
          visitedCountries.map(visitName =>(<li key={visitName.cca3}>{visitName.name.common}</li>)

          )
        }
      </div>


<div className="border border-x-lime-600">
  <p className="font-extrabold my-10 ">add flag</p>
<div className="grid grid-cols-5 justify-items-center">
{
    visitFlags.map(Flag =>
      <img className="w-20 mb-5 mr-2 h-16" src={Flag.flags.png} alt="" />
    )
  }
</div>
</div>



      <div className="grid grid-cols-3 gap-8 mt-10"> 

      {countries.map((country) => (
        <Country key={country.cca3} 
        handleVisitedCountries= {handleVisitedCountries}
        handleVisitedFlags = {handleVisitedFlags}
        country={country}></Country>
      ))}
      
      
      </div>
     
    </div>

    
  );
};

export default Countries;
