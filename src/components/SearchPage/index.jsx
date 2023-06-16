import React, { useEffect } from 'react'
import { Button, Container, InputGroup, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
            <Container style={{ width: 'fit-content', marginRight: 'auto', marginLeft: 'auto', display: 'flex', marginTop: '24px' }}>
                <InputGroup className="mb-3" size='sm'>
                    <InputGroup.Text id="basic-addon1">City</InputGroup.Text>
                    <Form.Control
                        placeholder="Ex: Toronto"
                    />
                </InputGroup>

                <Form.Select size='sm' style={{ height: '31px', marginLeft: '5px' }} defaultValue='notselected' >
                    <option>Property Type</option>
                    <option value="rental">Rental</option>
                    <option value="sale">Sale</option>
                </Form.Select>

                <Form.Select size='sm' style={{ height: '31px', marginLeft: '5px' }} defaultValue={0} >
                    <option>Bedroom #</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <button className='searchButton' >Search</button>
            </Container>
            <Container>
                listings
            </Container>
        </>
    )
}

export default SearchPage