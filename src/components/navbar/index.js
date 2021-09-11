import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import * as actionType from '../../constants/actionTypes';
import { useDispatch, useSelector } from 'react-redux'
import { Container, 
        NavContainer,
        NavContainerLeft,
        NavContainerRight,
        NavItem,
        Logo,
        CustomDropdown,
        SearchIcon,
        AvatarIcon
    } from './style'

    function Navbar() {
    const isLogged = useSelector(state => state.authReducer.authData);
    console.log(isLogged, '로그인 상태')
    const dispatch = useDispatch();
    const logOutBtn = () => {
        dispatch({ type: actionType.LOG_OUT });
    }
    return (
        <Container>
        <NavContainer>
            <NavContainerLeft>
                <NavItem><Link to = '/Muse'>MUSE</Link></NavItem>
                <NavItem><Link to = '/All'>ALL</Link></NavItem>
                <NavItem><Link to = '/Contest'>CONTEST</Link></NavItem>
            </NavContainerLeft>
                <Link to = '/'><Logo>MUSE</Logo></Link>
            <NavContainerRight>
                <SearchIcon size = {24}/>
                
                { isLogged == false || null ?
                <NavItem><Link to = 'auth'>로그인</Link></NavItem>
                :
                <CustomDropdown className = "shadow-none">
                    <CustomDropdown.Toggle  id="dropdown-menu-align-end">
                        <AvatarIcon/>
                    </CustomDropdown.Toggle>

                    <CustomDropdown.Menu>
                        <CustomDropdown.Item>
                            마이페이지
                        </CustomDropdown.Item>
                        <CustomDropdown.Item href="#/action-1" onClick = {logOutBtn}>
                            로그아웃
                        </CustomDropdown.Item>
                    </CustomDropdown.Menu>
                </CustomDropdown>
                }
            </NavContainerRight>
        </NavContainer>
        </Container>
    )
}

export default Navbar
