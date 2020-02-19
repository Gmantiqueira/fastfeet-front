import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
    height: 100%;
    background: #7D40E7 0% 0% no-repeat padding-box;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    height: 100%;
    max-height: 425px;
    width: 100%;
    max-width: 360px;
    text-align: center;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input {
            background: rgba(0, 0, 0, 0.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #fff;
            margin: 10px 0 0;

            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
        }

        span {
            color: #fb6f91;
            align-self: flex-start;
            margin-top: 2px;
        }

        button {
            margin: 15px 0 0;
            height: 44px;
            background: #3b9eff;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2;

            &:hover {
                background: ${darken(0.03, '#3b9eff')};
            }
        }

        a {
            color: #fff;
            margin-top: 15px;
            font-size: 16px;
            opacity: 0.8;

            &:hover {
                opacity: 1;
            }
        }
    }
`;
