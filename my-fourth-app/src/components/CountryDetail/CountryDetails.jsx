import React from 'react';

const CountryDetails = (props) => {

    const { country , handleVisitedFlags, handleVisitedCountries} = props;
    return (
        <div>
            <img src= {country.flags.png} alt="" />
        </div>
    );
};

export default CountryDetails;