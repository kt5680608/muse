import styled from 'styled-components'
import { Dropdown } from 'react-bootstrap'
import { Dropdown as GDropdown } from 'gestalt'

export const MainContainer = styled.div`
    padding: 30px;
    @media ( max-width: 320px ){
        padding: 10px;
    }
`
export const DropDownContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 104px;
`
export const GridContainer = styled.div`
    
`
export const ListItem = styled.div`
`
export const CustomDropdown = styled(Dropdown)`
    position: relative;
    margin: 12px 0 12px 0;
    .btn{
        border-radius: 24px;
    }
    .btn-primary{
        background-color: var(--g-color-blue);
        border-color: var(--g-color-blue);
    }
    .btn-success{
        background-color: var(--g-color-blue);
        border-color: var(--g-color-blue);
    }
    .btn-success:hover{
        background-color: var(--g-color-blue);
    }
    #dropdown-menu-align-end{
        width: 100%;
        padding: 0;
        background-color: transparent;
        border: none;
        color: var(--g-olor-blue);
    }
    .dropdown-menu{
        min-width: auto;
        background-color: white;
    }
    .dropdown-item{
        display: flex;
        justify-content: center;
        font-weight: 600;
        &:hover {
            background-color: var(--g-color-blue);
        }
    }
    
    .btn-check:focus + &, &:focus{
        background-color: transparent;
        box-shadow: none;
    }
    .btn-check:focus + .btn-primary, .btn-primary:focus{
        box-shadow: none;
    }
    .btn-check:checked + .btn-primary:focus, .btn-check:active + .btn-primary:focus, .btn-primary:active:focus, .btn-primary.active:focus, .show > .btn-primary.dropdown-toggle:focus {
    box-shadow: none;
    }
`

export const GestaltDropdown = styled(GDropdown)`
    position: relative;
    z-index: 1000;
`

