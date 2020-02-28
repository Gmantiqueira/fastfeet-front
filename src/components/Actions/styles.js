import styled from 'styled-components';

export const Button = styled.button`
    background: #fff;
    border: 0;
    color: #c6c6c6;
    font-family: 'Roboto';
    font-size: 32px;
    font-weight: bold;
    position: relative;
    width: 100%;
    span {
        align-items: center;
        display: flex;
        height: 4px;
        justify-content: center;
        line-height: 0;
        text-align: center;
        width: 100%;
    }
`;

export const Menu = styled.div`
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 0px 2px #00000026;
    display: ${props => (props.isVisible ? 'flex' : 'none')};
    flex-direction: column;
    max-height: 120px;
    left: -32px;
    padding: 15px 10px;
    position: absolute;
    top: 40px;
    width: 150px;
    z-index: 2;
    &:after {
        background: transparent;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #fff;
        filter: drop-shadow(0px -2px 1px #eee);
        content: '';
        height: 0;
        left: calc(75px - (10px / 2));
        top: -10px;
        position: absolute;
        width: 0;
    }
`;

export const Option = styled.div`
    background: #fff;
    border-bottom: 2px solid #eeeeee;
    color: #999999;
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    letter-spacing: 0;
    line-height: 20px;
    padding: 5px 0;
    font-weight: normal;
    &:last-child {
        border: 0;
    }
    img {
        margin-right: 8px;
        width: 16px;
    }
`;
