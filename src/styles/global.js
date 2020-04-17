import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    html, body, #root {
        height: 100%;
        min-height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 14px 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }

    input + span, #react-select + span {
        color: #de3b3b;
    }

    ul {
        list-style: none;
    }

    button {
        background: #FFF;
        border: 0;
        cursor: pointer;
        outline: 0;
    }
`;
