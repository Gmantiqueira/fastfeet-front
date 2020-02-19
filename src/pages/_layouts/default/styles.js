import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    background: #F5F5F5;
`;

export const Header = styled.nav`
    background: #FFFFFF;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
    max-height: 64px;
    padding: 16px 0;
    width: 100%;
    div {
        align-items: center;
        display: flex;
        flex: 1;
        justify-content: center;
    }
    .logo {
        border-right: 1px solid #DDD;
        max-width: 195px;
    }
    .menu {
        justify-content: flex-start;
        padding: 0px 30px;
        a {
            color: #999999;
            margin-right: 20px;
        }
    }
    .profile {
        border-right: 1px solid #DDD;
        flex-direction: column;
        max-width: 195px;
    }
`;
