import styled from 'styled-components';

import { darken } from 'polished';

export const Wrapper = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 60px 30px;
    img {
        height: auto;
        margin: 0 auto;
        margin-bottom: 40px;
        width: 260px;
    }

    form {
        display: flex;
        flex-direction: column;
        label,
        span {
            color: #444;
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 9px;
            line-height: 19px;
            text-transform: uppercase;
        }
        input {
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 4px;
            height: 45px;
            margin-bottom: 15px;
            padding: 0 15px;
            width: 300px;
        }
        button {
            background: #7d40e7;
            border-radius: 4px;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            height: 45px;
            line-height: 21px;
            transition: 0.2s ease background;
            width: 300px;
            &:hover {
                background: ${darken('0.1', '#7d40e7')};
            }
        }
    }
`;
