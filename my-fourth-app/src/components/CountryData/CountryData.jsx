import React from 'react';
import CountryDetails from '../CountryDetail/CountryDetails';

const CountryData = (props) => {

    const { country, handleVisitedCountries, handleVisitedFlags} = props;
    return (
        <div>
            <p>hello: {country.name.common} </p>

            <CountryDetails {...props} ></CountryDetails>
        </div>

    );
};

export default CountryData;