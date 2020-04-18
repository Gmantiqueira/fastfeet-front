import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100% - 136px);
    position: relative;
    .loader-wrapper {
        position: relative;
        top: 20px;
    }
    header {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: 15px 25px;
        .actions {
            text-align: center;
        }
    }
    h3.no-data {
        text-align: center;
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
    flex: ${({ loading }) => (loading ? `1` : `auto`)};
    overflow: scroll;
    position: relative;
    &::-webkit-scrollbar {
        background: rgba(0, 0, 0, 0);
        border-radius: 0;
        display: none;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0);
        border-radius: 0;
        display: none;
    }
    &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0);
        border-radius: 0;
        display: none;
    }
`;
