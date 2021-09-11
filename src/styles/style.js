import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
    --color-blue: #0057ff;
    --color-black: #000;
    }
    a {
    text-decoration: none;
    color: var(--color-black);
    margin: 0;
    padding: 0;
    cursor: pointer;
}

    a:visited {
    text-decoration: none;
    }

    a:hover {
    text-decoration: none;
    }

    a:focus {
    text-decoration: none;
    }

    a:hover,
    a:active {
    text-decoration: none;
    }
`;