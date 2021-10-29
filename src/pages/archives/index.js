import React, { useEffect } from 'react'
import { Navbar, Banner, PostButton } from '../../components'
import { userInfo } from '../../actions/userInfo'
import { useDispatch } from 'react-redux'
import * as style from './style'
function Archives() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userInfo());
    },[])
    return (
        <div>
            <Navbar/>
            <Banner/>
            <PostButton/>
        </div>
    )
}

export default Archives
