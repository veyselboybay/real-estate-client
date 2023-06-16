import React, { useEffect } from 'react'
import { Button, Container, Form, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import data from '../../listings-data'
import Listing from '../Listing'
const SearchPage = () => {
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((positions) => {
            const coord = positions.coords;
            console.log(coord);
            // fetch(`https://geocoding-api.open-meteo.com/v1/search?name=toronto&count=10&language=en&format=json`).then((res) => {
            //     console.log(res);
            // }).catch(err => console.log(err));
        });
    }, []);

    return (
        <>
            <Container style={{ width: 'fit-content', marginRight: 'auto', marginLeft: 'auto', display: 'flex', marginTop: '24px', marginBottom: '18px' }}>
                <Form.Select size='sm' style={{ height: '31px', marginLeft: '5px', width: '200px' }} defaultValue="toronto" >
                    <option value="toronto">Toronto</option>
                    <option value="north york">North York</option>
                    <option value="richmond hill">Richmond Hill</option>
                    <option value="mississauga">Mississauga</option>
                </Form.Select>

                <Form.Select size='sm' style={{ height: '31px', marginLeft: '5px', width: '200px' }} defaultValue="rental" >
                    <option value="rental">For Rental</option>
                    <option value="sale">For Sale</option>
                </Form.Select>
                <Form.Select size='sm' style={{ height: '31px', marginLeft: '5px', width: '200px' }} defaultValue='condo' >
                    <option value="condo">Condo</option>
                    <option value="house">House</option>
                </Form.Select>

                <Form.Select size='sm' style={{ height: '31px', marginLeft: '5px', width: '200px' }} defaultValue={1} >
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedroom</option>
                    <option value="3">3 Bedroom</option>
                </Form.Select>
                <button className='searchButton' >Search</button>
            </Container>
            <Container fluid >
                <Row style={{ width: 'fit-content', marginRight: 'auto', marginLeft: 'auto', display: 'flex' }}>
                    {data && data.map((listing, index) => {
                        return <Col md={3} sm={6} key={index} style={{ marginBottom: '10px' }}>
                            <Listing {...listing} />
                        </Col>
                    })}
                </Row>
            </Container>
        </>
    )
}

export default SearchPage