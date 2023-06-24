import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import data from '../../listings-data'
import Listing from '../Listing'
import { useDispatch, useSelector } from 'react-redux'
import { getListings, searchListings } from '../../features/listingSlice'

const SearchPage = () => {
    const dispatch = useDispatch();
    const { listings } = useSelector(store => store.listing);
    const [queryObj, setQueryObj] = useState({
        city: 'toronto',
        transactionType: 'rental',
        propertyType: 'condo',
        beds: '1'
    })
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((positions) => {
            const coord = positions.coords;
        });
    }, []);
    useEffect(() => {
        dispatch(getListings(queryObj));
    }, []);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setQueryObj(prev => {
            return { ...prev, [name]: value }
        })
    }

    return (
        <>
            <Container style={{ width: 'fit-content', marginRight: 'auto', marginLeft: 'auto', display: 'flex', marginTop: '24px', marginBottom: '18px' }}>
                <Form.Select size='sm' style={{ height: '31px', marginLeft: '5px', width: '200px' }} defaultValue="toronto" name='city' onChange={(e) => handleChange(e)}>
                    <option value="toronto">Toronto</option>
                    <option value="north york">North York</option>
                    <option value="richmond hill">Richmond Hill</option>
                    <option value="mississauga">Mississauga</option>
                </Form.Select>

                <Form.Select size='sm' style={{ height: '31px', marginLeft: '5px', width: '200px' }} name='transactionType' defaultValue="rental" onChange={(e) => handleChange(e)}>
                    <option value="rental">For Rental</option>
                    <option value="sale">For Sale</option>
                </Form.Select>
                <Form.Select size='sm' style={{ height: '31px', marginLeft: '5px', width: '200px' }} name='propertyType' defaultValue='condo' onChange={(e) => handleChange(e)}>
                    <option value="condo">Condo</option>
                    <option value="house">House</option>
                </Form.Select>

                <Form.Select size='sm' style={{ height: '31px', marginLeft: '5px', width: '200px' }} name='beds' defaultValue={1} onChange={(e) => handleChange(e)}>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedroom</option>
                    <option value="3">3 Bedroom</option>
                </Form.Select>
                <button className='searchButton' onClick={() => dispatch(searchListings(queryObj))}>Search</button>
            </Container>
            <Container fluid >
                <Row style={{ width: 'fit-content', marginRight: 'auto', marginLeft: 'auto', display: 'flex' }}>
                    {listings && listings.map((listing, index) => {
                        return (

                            <Col md={3} sm={6} key={index} style={{ marginBottom: '10px' }}>
                                <Link to={listing.id.toString()}><Listing {...listing} /></Link>
                            </Col>

                        )
                    })}
                </Row>
            </Container>
        </>
    )
}

export default SearchPage