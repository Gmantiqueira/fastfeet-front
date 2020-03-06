import styled from 'styled-components';

export const Wrapper = styled.div`
    background: #fff;
    border-radius: 4px;
    display: flex;
    height: 57px;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 15px 25px;
    width: 100%;
    .status {
        font-size: 14px;
        letter-spacing: 0;
        text-transform: uppercase;
    }
`;

export const Column = styled.div`
    align-items: center;
    display: flex;
    flex-shrink: ${props => props.width};
    font-size: 16px;
    line-height: 19px;
    width: 100%;
    img {
        border-radius: 50%;
        height: 35px;
        object-fit: contain;
        width: 35px;
    }
`;

const statusColor = type => {
    let lightColor;
    let darkColor;
    if (type) {
        switch (type.toLowerCase()) {
            case 'entregue':
                lightColor = '#dff0df';
                darkColor = '#2ca42b';
                break;
            case 'pendente':
                lightColor = '#F0F0DF';
                darkColor = '#C1BC35';
                break;
            case 'retirada':
                lightColor = '#BAD2FF';
                darkColor = '#4D85EE';
                break;
            case 'cancelada':
                lightColor = '#FAB0B0';
                darkColor = '#DE3B3B';
                break;
            default:
                break;
        }
    }

    return {
        lightColor,
        darkColor,
    };
};

export const Status = styled.div`
    align-items: center;
    background: ${props => statusColor(props.type).lightColor};
    border-radius: 12px;
    color: ${props => statusColor(props.type).darkColor};
    display: flex;
    font-weight: bold;
    justify-content: center;
    max-width: 120px;
    padding: 4px;
    width: auto;
    &:before {
        background: ${props => statusColor(props.type).darkColor};
        border-radius: 50%;
        content: '';
        display: block;
        height: 10px;
        margin-right: 6px;
        width: 10px;
    }
`;
