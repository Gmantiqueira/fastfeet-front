import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    header {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: 15px 25px;
        padding-right: 35px;
    }
`;

export const Column = styled.div`
    color: #444;
    flex: ${props => props.width};
    font-size: 16px;
    font-weight: bold;
    line-height: 21px;
    padding: 0 8px;
    width: 100%;
`;

export const Scroll = styled.div`
    height: 100%;
    max-height: 500px;
    overflow: hidden;
    overflow-y: auto;

    ::-webkit-scrollbar,
    ::-webkit-scrollbar-thumb {
        border-radius: 8px;
    }
`;
