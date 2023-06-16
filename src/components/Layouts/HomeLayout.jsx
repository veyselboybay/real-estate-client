import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar'
const HomeLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default HomeLayout