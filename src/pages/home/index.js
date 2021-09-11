import React from 'react'
import { Navbar, Banner, Container } from '../../components'
function Home() {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Container/>
            {/*<h1>{token.name}은 너무 멋있어</h1>
            <h2>{token.id}가 내 아이디</h2>*/}
        </div>
    )
}

export default Home
