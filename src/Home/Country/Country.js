import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Country.css'

const Country = (props) => {
    // console.log(props.data)
    const history = useHistory()

    const handleClick = (name) => {
        history.push(`/country/${name}`)
    }
    const { flag, name, capital, area } = props.data
    return (
        <Card className="card">
            <Card.Img variant="top" src={flag} />
            <Card.Body>
                <h4>{name}</h4>
                <Card.Title>{capital}</Card.Title>
                <Card.Text>Area : {area} </Card.Text>
                <Button onClick={() => handleClick(name)} className="btn btn-secondary">More Details</Button>
            </Card.Body>
        </Card>
    );
};

export default Country;