import React, { useState, useEffect } from 'react'
import { Navbar,
    Banner,
    Container,
    PostButton } from '../../components'
import { userInfo } from '../../actions/userInfo'
import { useDispatch, useSelector } from 'react-redux'
function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userInfo());
    },[])


    return (
        <div>
            <Navbar/>
            <Banner/>
            <PostButton/>
            <Container>
            </Container>
        </div>
    )
}

export default Home
