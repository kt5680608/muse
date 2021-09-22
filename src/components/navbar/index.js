import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import * as actionType from '../../constants/actionTypes';
import { useDispatch, useSelector } from 'react-redux'
import { useMediaQuery as MediaQuery } from 'react-responsive'
import { Container, 
        NavContainerDesktop,
        NavContainerTablet,
        NavContainerMobile,
        NavContainerLeft,
        NavContainerRight,
        NavItem,
        Logo,
        CustomDropdown,
        SearchIcon,
        AvatarIcon,
        BurgerIcon,
        DropdownMenu
    } from './style'
import NavModal from '../navModal'
    function Navbar() {
    //반응형 대응
    const isDesktop = MediaQuery({
        query: "(min-width: 1024px"
    });
    const isTablet = MediaQuery({
        query: "(min-width: 768px) and (max-width: 1023px)"
    })
    const isMobile = MediaQuery({
        query: "(max-width: 767px)"
    })
    const isLogged = useSelector(state => state.authReducer.authData);
    const dispatch = useDispatch();
    const logOutBtn = () => {
        dispatch({ type: actionType.LOG_OUT });
    }
    return (
        <div>
        {isDesktop &&
            <Container>
            <NavContainerDesktop>
                <NavContainerLeft>
                    <Link to = '/Muse'><NavItem>MUSE</NavItem></Link>
                    <Link to = '/All'><NavItem>ALL</NavItem></Link>
                    <Link to = '/Contest'><NavItem>CONTEST</NavItem></Link>
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
                                <Link to = '/myPage'>마이페이지</Link>
                            </CustomDropdown.Item>
                            <CustomDropdown.Item href="#/action-1" onClick = {logOutBtn}>
                                로그아웃
                            </CustomDropdown.Item>
                        </CustomDropdown.Menu>
                    </CustomDropdown>
                    }
                </NavContainerRight>
            </NavContainerDesktop>
            </Container>
        }

        {isTablet && 
            <Container>
            <NavContainerTablet>
                <NavContainerLeft>
                <CustomDropdown className = "shadow-none">
                        <CustomDropdown.Toggle  id="dropdown-menu-align-end">
                            <BurgerIcon/>
                        </CustomDropdown.Toggle>
                        <CustomDropdown.Menu>
                            <CustomDropdown.Item>
                                <Link to = '/Muse'>
                                    <DropdownMenu>
                                        MUSE
                                    </DropdownMenu>
                                </Link>
                            </CustomDropdown.Item>
                            <CustomDropdown.Item>
                                <Link to = '/All'>
                                    <DropdownMenu>
                                        All
                                    </DropdownMenu>
                                </Link>
                            </CustomDropdown.Item>
                            <CustomDropdown.Item>
                                <Link to = '/All'>
                                    <DropdownMenu>
                                        Contest
                                    </DropdownMenu>
                                </Link>
                            </CustomDropdown.Item>
                        </CustomDropdown.Menu>
                    </CustomDropdown>
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
                                <DropdownMenu>
                                    마이페이지
                                </DropdownMenu>
                            </CustomDropdown.Item>
                            <CustomDropdown.Item href="#/action-1" onClick = {logOutBtn}>
                                <DropdownMenu>
                                    로그아웃
                                </DropdownMenu>
                            </CustomDropdown.Item>
                        </CustomDropdown.Menu>
                    </CustomDropdown>
                    }
                </NavContainerRight>
            </NavContainerTablet>
            </Container>
        }

        { isMobile && 
            <Container>
            <NavContainerMobile>
                <NavContainerLeft>
                <CustomDropdown className = "shadow-none">
                        <CustomDropdown.Toggle  id="dropdown-menu-align-end">
                            <BurgerIcon/>
                        </CustomDropdown.Toggle>

                        <CustomDropdown.Menu>
                            <CustomDropdown.Item>
                                <DropdownMenu>
                                    <Link to = '/Muse'>MUSE</Link>
                                </DropdownMenu>
                            </CustomDropdown.Item>
                            <CustomDropdown.Item>
                                <DropdownMenu>
                                    <Link to = '/All'>ALL</Link>
                                </DropdownMenu>
                            </CustomDropdown.Item>
                            <CustomDropdown.Item>
                                <DropdownMenu>
                                    <Link to = '/Contest'>CONTEST</Link>
                                </DropdownMenu>
                            </CustomDropdown.Item>
                        </CustomDropdown.Menu>
                    </CustomDropdown>
                </NavContainerLeft>
                    <Link to = '/'><Logo>MUSE</Logo></Link>
                <NavContainerRight>
                    { isLogged == false || null ?
                    <NavItem><Link to = 'auth'>로그인</Link></NavItem>
                    :
                    <CustomDropdown className = "shadow-none">
                        <CustomDropdown.Toggle  id="dropdown-menu-align-end">
                            <AvatarIcon/>
                        </CustomDropdown.Toggle>

                        <CustomDropdown.Menu>
                            <CustomDropdown.Item>
                                <DropdownMenu>
                                    마이페이지
                                </DropdownMenu>
                            </CustomDropdown.Item>
                            <CustomDropdown.Item href="#/action-1" onClick = {logOutBtn}>
                                <DropdownMenu>
                                    로그아웃
                                </DropdownMenu>
                            </CustomDropdown.Item>
                        </CustomDropdown.Menu>
                    </CustomDropdown>
                    }
                </NavContainerRight>
            </NavContainerMobile>
            </Container>
        }
        </div>
    )
}

export default Navbar
