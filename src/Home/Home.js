import React, { useEffect, useState } from 'react';
import Country from './Country/Country';
import './Home.css'

const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <section className="section">
            {
                data.map(data => <Country key={data.name} data={data}></Country>)
            }
        </section>
    );
};

export default Home;