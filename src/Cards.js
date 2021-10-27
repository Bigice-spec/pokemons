import Card from 'react-bootstrap/Card'
import React from 'react'
import typeColor from './helpers/typeColor'


export default function Cards({ id, name, image, type }) {
    return (
        <div>
            <Card style={{ width: '18rem', 
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' ,
            backgroundColor: typeColor[type]}}>
                <Card.Img variant="top" src={image} alt={name} height='100' />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>{type}</Card.Subtitle>
                    <Card.Text>
                        <h6>{id}</h6>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
