import React, { useEffect } from 'react'
import { Col, Container, Row, Carousel } from 'react-bootstrap'
import condoPic from '../../assets/condoPic.jpg'
import Recommend from '../Recommend'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


const OneListPage = () => {
    const { listings } = useSelector(store => store.listing);
    const { listingId } = useParams();
    const data = listings.filter(item => item.id !== parseInt(listingId)).slice(0, 3);
    let listing = listings.find(item => item.id === parseInt(listingId));
    useEffect(() => {
        listing = listings.find(item => item.id === parseInt(listingId));
        // console.log(listing);
    }, [listingId])
    return (
        <Container className='oneListing'>
            <Row>
                <Col md={9}>
                    <Carousel className='carousel'>
                        <Carousel.Item>
                            <img
                                className="d-block listing-image"
                                src={listing !== undefined ? (listing.pictures.length !== 0 ? '../src/assets/' + listing.pictures[0] : condoPic) : condoPic}
                                // src={condoPic}
                                alt="Listing Picture"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <Container className='description'>
                        {listing && <>
                            <h5>Price</h5>
                            <p>${listing.price}/month</p>
                            <h5>Description of the place</h5>
                            <p>{listing.description}</p>
                            <h5>Type of the Place</h5>
                            <p>{listing.transactionType} {listing.propertyType}</p>
                            <h5>Beds</h5>
                            <p>{listing.beds} bed(s)</p>
                            <h5>Location</h5>
                            <p>{listing.city} - {listing.postalCode}</p>
                            <h5>Owner Information</h5>
                            <p>n/a</p>
                        </>}
                    </Container>
                </Col>
                <Col md={3} className='recommend-col'>
                    <p className='recommend-heading'>MAYBE ONE OF THESE?</p>
                    {data && data.map((item, index) => {
                        return <Link key={index} to={'/search/' + item.id.toString()}>
                            <Recommend {...item} />
                        </Link>
                    })}</Col>
            </Row>
        </Container>
    )
}

export default OneListPage