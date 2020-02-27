import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
    h1 {
        font-size: 24px;
        line-height: 32px;
        margin-top: 34px;
    }
    .topbar.actions {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        margin-top: 34px;
        .input-container {
            align-items: center;
            background: white;
            border: 1px solid #ddd;
            border-radius: 4px;
            display: flex;
            height: 36px;
            padding: 0px 16px;
            img {
                color: #999;
            }
            input {
                background: none;
                border: 0;
                height: 100%;
                margin-left: 8px;
                outline: 0;
            }
        }

        .button-group {
            display: flex;
            button {
                align-items: center;
                background: #ccc;
                border: 0;
                border-radius: 4px;
                color: #fff;
                display: flex;
                font-size: 14px;
                font-weight: bold;
                height: 36px;
                justify-content: center;
                line-height: 14px;
                margin-right: 16px;
                text-transform: uppercase;
                transition: 0.2s ease background;
                width: 142px;
                &:last-child {
                    margin-right: 0;
                }
                img {
                    margin-right: 4px;
                }
                &:hover {
                    background: ${darken(0.1, '#ccc')};
                }

                &.primary {
                    background: #7d40e7;
                    &:hover {
                        background: ${darken(0.1, '#7d40e7')};
                    }
                }
            }
        }
    }
`;
