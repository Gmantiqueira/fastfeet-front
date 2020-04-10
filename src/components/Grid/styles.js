import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    position: relative;
    header {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: 15px 25px;
        .actions {
            text-align: center;
        }
    }
`;

export const Column = styled.div`
    color: #444;
    flex: ${props => props.width};
    font-size: 16px;
    font-weight: bold;
    line-height: 21px;
    min-width: 0;
    padding: 0 8px;
`;

export const Scroll = styled.div`
    height: 100%;
    position: relative;
`;
