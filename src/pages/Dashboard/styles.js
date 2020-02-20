import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    height: 100%;
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    h1 {
        font-size: 24px;
        line-height: 32px;
        margin-top: 34px;
    }
    .actions {
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
            padding: 10px 16px;
            i {
                color: #999;
            }
            input {
                background: none;
                border: 0;
                margin-left: 8px;
                outline: 0;
            }
        }

        button {
            align-items: center;
            background: #7d40e7;
            border: 0;
            border-radius: 4px;
            color: #fff;
            display: flex;
            font-size: 14px;
            font-weight: bold;
            height: 36px;
            justify-content: center;
            line-height: 14px;
            text-transform: uppercase;
            transition: 0.2s ease background;
            width: 142px;
            i {
                font-size: 24px;
                margin-right: 8px;
            }
            &:hover {
                background: ${darken(0.05, '#7d40e7')};
            }
        }
    }
`;
