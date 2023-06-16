import React from 'react'
import { Card } from 'react-bootstrap'
import condoImg from '../../assets/condoPic.jpg'
const Listing = ({ id, city, transactionType, propertyType, beds, description, pictures, price }) => {
    return (
        <Card style={{ width: '19rem' }}>
            <Card.Img variant="top" src={pictures.length !== 0 ? pictures[0] : condoImg} />
            <Card.Body>
                {description && <Card.Text>
                    {description}
                </Card.Text>}
                <p>{city} - {beds} bed(s)  {transactionType}  {propertyType} <br /> Price: ${price}/month</p>
            </Card.Body>
        </Card>
    )
}

export default Listing