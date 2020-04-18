import styled from 'styled-components';

export const Wrapper = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    max-width: 900px;
    padding: 32px 30px;
    width: 100%;
    div.row {
        display: flex;
        flex-wrap: wrap;
        margin-top: 8px;
        &:first-child {
            margin-top: 0px;
        }
        .field {
            display: flex;
            flex-direction: column;
            flex: 1;
            margin-right: 30px;
            &:last-child {
                margin-right: 0;
            }
            &.sm {
                max-width: 150px;
            }
            label {
                color: #444;
                font-size: 14px;
                font-weight: bold;
                line-height: 19px;
            }
            > input {
                border: 1px solid #ddd;
                border-radius: 4px;
                color: #444;
                height: 45px;
                padding: 0 15px;
                &::placeholder {
                    color: #bbb;
                }
            }
        }
    }
`;
