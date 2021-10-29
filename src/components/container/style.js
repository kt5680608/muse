import styled from 'styled-components'
import { Dropdown } from 'react-bootstrap'
export const DropDownContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 104px;
`
export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 12px;
    justify-content: center;
`
export const ListItem = styled.div`
`
export const CustomDropdown = styled(Dropdown)`
    position: relative;
    margin-bottom: 24px;
`