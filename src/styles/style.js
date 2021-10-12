import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
    --g-color-blue: #0057ff;
    --g-color-black: #000;
    --g-color-white: #fff;
    --g-color-gray0: #fff;
    --g-color-gray50: #fff;
    --g-color-gray100: #efefef;
    --g-color-gray150: #ddd;
    --g-color-gray200: #767676;
    --g-color-gray300: #111;
    --g-color-gray400: #000;    
    --g-ncols: 12;

    --g-text-font-size-1: 12px;
    --g-text-font-size-2: 14px;
    --g-text-font-size-2: 16px;



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