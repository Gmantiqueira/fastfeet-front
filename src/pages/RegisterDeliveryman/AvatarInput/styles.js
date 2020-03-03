import styled from 'styled-components';

export const Container = styled.div`
    align-self: center;
    margin: 0 auto;
    margin-bottom: 24px;

    label {
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }

        img {
            background: #fff;
            border-radius: 50%;
            border: 1px dashed #ddd;
            display: block;
            height: 150px;
            width: 150px;
        }

        input {
            display: none;
        }
    }
`
