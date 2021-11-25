import React, { useState, useEffect } from 'react'
import { Navbar,
    Banner,
    Container,
    PostButton } from '../../components'
import { userInfo } from '../../actions/userInfo'
import { useDispatch, useSelector } from 'react-redux'
import { HomeContainer } from './style'
function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userInfo());
    },[])


    return (
        <HomeContainer>
            <Navbar/>
            <Banner/>
            <PostButton/>
            <Container/>
        </HomeContainer>
    )
}

export default Home
