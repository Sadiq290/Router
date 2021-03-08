import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Name from './Name';
const Define = () => {
    const [country, setCountry] = useState([])
    const { name } = useParams()
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])
    // console.log(country)
    return (
        <div>
            {
                country.map(country =>
                    <Name key={country.name} country={country}>
                    </Name>)
            }
        </div>
    );
};

export default Define;