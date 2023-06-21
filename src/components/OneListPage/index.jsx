import React, { useEffect } from 'react'
import { Col, Container, Row, Carousel } from 'react-bootstrap'
import condoPic from '../../assets/condoPic.jpg'
import listingData from '../../listings-data'
import Recommend from '../Recommend'
import { Link, useParams } from 'react-router-dom'


const OneListPage = () => {
    const data = listingData.slice(0, 3);
    const { listingId } = useParams();
    let listing = listingData.find(item => item.id === parseInt(listingId));;
    useEffect(() => {
        listing = listingData.find(item => item.id === parseInt(listingId));
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
                    {listing && <p>{listing.description}</p>}
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