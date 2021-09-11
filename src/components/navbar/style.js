import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi'
import { Dropdown } from 'react-bootstrap'
import { CgProfile } from 'react-icons/cg'

export const Container = styled.div`
width: 100vw;
display: flex;
justify-content: center;
`
export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 94vw;
    height: 80px;
    background-color: #fff
`

export const NavContainerLeft = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-basis: 360px;
`
export const NavContainerRight = styled(NavContainerLeft)`
    justify-content: flex-end;
`

export const NavItem= styled.div`
    font-size: 18px;
    font-family: Noto-Sans-KR-Bold;
    font-weight: 900;
`

export const Logo = styled.div`
    font-family: R-FLEX-BLACK;
    font-size: 48px;
    color: var(--color-blue);
`
export const SearchIcon = styled(BiSearch)`
    margin-right: 24px;
    font-size: 24px;
    &:hover {
        color: var(--color-blue);
    }
`

export const AvatarIcon = styled(CgProfile)`
    
    font-size: 24px;
    &:hover{
        color: var(--color-blue);
    }
`

export const CustomDropdown = styled(Dropdown)`
    button {
        background-color: var(--color-blue);
        width: 72px;
        height: 36px;
    }
    
    .btn-success{
        background-color: var(--color-blue);
        border-color: var(--color-blue);
    }
    .btn-success:hover{
        background-color: var(--color-blue);
    }
    #dropdown-menu-align-end{
        width: 100%;
        padding: 0;
        background-color: transparent;
        border: none;
        color: var(--color-blue);
    }
    .dropdown-menu{
        min-width: 120px;
        background-color: white;
    }
    .dropdown-item{
        color:black;
        display: flex;
        justify-content: center;
        &:hover {
            background-color: var(--color-blue);
            color: white;
        }
    }
    .dropdown-menu {display: block;visibility: hidden;opacity:0;transform: translateY(50px);transition:.5s ease all;}
    .dropdown-menu.show {display: block;visibility: visible;opacity:1;transform: translateY(0px);transition:.5s ease all;}
`