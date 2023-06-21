import React from 'react'
import { Card } from 'react-bootstrap'
import condoImg from '../../assets/condoPic.jpg'
const Listing = ({ id, city, transactionType, propertyType, beds, description, pictures, price }) => {
    const listingPic = pictures[0];
    // console.log(listingPic);
    return (
        <Card style={{ width: '19rem' }}>
            <Card.Img variant="top" style={{ height: '10rem' }} src={listingPic ? './src/assets/' + listingPic : condoImg} />
            <Card.Body style={{ height: '10rem' }}>
                {description && <Card.Text>
                    {description}
                </Card.Text>}
                <p>{city} - {beds} bed(s)  {transactionType}  {propertyType} <br /> Price: ${price}/month</p>
            </Card.Body>
        </Card>
    )
}

export default Listing