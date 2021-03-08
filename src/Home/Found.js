import React from 'react';
import { useHistory } from 'react-router';
import './Found.css'

const  Found = () => {
    const history = useHistory()
    const handleClick = () => {
        history.push("/country")
    }
    return (
        <div className="NotFound">
             <h1 className="found">Sorry. I didn't Quite Catch That.</h1>
             <h2 className="found">404! Not Found the page.</h2>
             <button onClick={handleClick}>Go back</button>
        </div>
    );
};

export default  Found;