import styled from 'styled-components'
import { Dropdown } from 'react-bootstrap'

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
    .item{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`