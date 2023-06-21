import React from 'react'
import { Card } from 'react-bootstrap'
import condoImg from '../../assets/condoPic.jpg'

const Recommend = ({ id, city, transactionType, propertyType, beds, description, pictures, price }) => {
    return (
        <Card style={{ width: 'fit-content', margin: '10px 20px' }}>
            <Card.Img variant="top" src={pictures.length !== 0 ? '../src/assets/' + pictures[0] : condoImg} />
            <Card.Text style={{ padding: '5px 5px' }}>{beds} bed(s)  {transactionType} in {city} <br /> Price: ${price}/month</Card.Text>
        </Card>
    )
}

export default Recommend