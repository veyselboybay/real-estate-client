import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div className='home'>
            <div className="header-container">
                <h3 className='header'>Find Your Next Place With Us.</h3>
            </div>
            <div className="start-button">
                <Link to='search'>
                    <Button variant='primary' >Let's get you started!</Button>
                </Link>
            </div>
        </div>
    )
}

export default Home