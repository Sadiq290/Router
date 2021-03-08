import React from 'react';
import './Name.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Name = (props) => {
    console.log(props.country)
    const { name, flag, capital, population, region, area, demonym } = props.country
    return (
        <div className="page">
            <div className="name">
                <h3>{name}</h3>
                <img src={flag} alt="" />
                <h4 style={{ marginBottom: '15px' }}>Capital: {capital}</h4>
                <h5>Population: {population}</h5>
                <h5>Area: {area} Square Km</h5>
                <h5>Region: {region}</h5>
                <h5>Sar Name: {demonym}</h5>
                <button style={{ marginTop: '10px' }} className="btn btn-danger">
                    <Link to="/country">Go Home</Link></button>
            </div>
        </div>
    );
};

export default Name;