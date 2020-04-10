import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.nav`
    background: #fff;
    border-bottom: 1px solid #ddd;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
    max-height: 64px;
    position: relative;
    width: 100%;
    z-index: 1001;
    div {
        align-items: center;
        display: flex;
        flex: 1;
        justify-content: center;
    }
    .logo {
        border-right: 1px solid #ddd;
        margin: 16px 0;
        max-width: 195px;
    }
    .menu {
        justify-content: flex-start;
        padding: 0px 30px;
        a {
            color: #999;
            font-weight: bold;
            margin-right: 20px;
            text-transform: uppercase;
            transition: 0.2s ease color;
            &.active {
                color: #444;
            }
            &:hover {
                color: #444;
            }
        }
    }
    .profile {
        align-items: flex-end;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 30px;
        max-width: 195px;
        * {
            font-size: 14px;
            line-height: 19px;
        }
        h4 {
            color: #666;
            font-weight: bold;
            margin-bottom: 5px;
        }
        p {
            color: #de3b3b;
        }
    }
`;
