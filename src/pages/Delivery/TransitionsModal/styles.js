import styled from 'styled-components';

export const Content = styled.div`
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 0px 10px #00000033;
    height: auto;
    min-width: 450px;
    padding: 25px;

    p,
    h4 {
        font-family: 'Roboto', sans-serif;
    }

    img {
        display: block;
        height: auto;
        margin: 0 auto;
        margin-top: 12px;
        width: 180px;
    }

    p {
        color: #444;
        font-size: 14px;
        font-weight: bold;
        line-height: 19px;
        margin-bottom: 4px;
    }

    h4 {
        color: #666;
        font-size: 16px;
        line-height: 26px;
        font-weight: normal;
    }

    hr {
        border-color: #eee;
        margin: 12px auto;
    }
`;
