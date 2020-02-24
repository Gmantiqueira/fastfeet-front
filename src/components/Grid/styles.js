import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    header {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: 15px 25px;
    }
    main {
        display: flex;
        flex-flow: row nowrap;
        flex-direction: column;
    }
`;

export const Column = styled.div`
    color: #444;
    flex-shrink: ${props => props.width};
    font-size: 16px;
    font-weight: bold;
    line-height: 21px;
    text-transform: uppercase;
    width: 100%;
`;
