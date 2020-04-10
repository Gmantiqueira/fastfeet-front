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
    flex: ${props => props.width};
    font-size: 16px;
    line-height: 19px;
    min-width: 0;
    padding: 0 8px;
    > span {
        color: #666666;
        font-size: 16px;
        line-height: 20px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .width35 {
        max-width: 35px;
        min-width: 35px;
        max-height: 35px;
        min-height: 35px;
    }
    .width45 {
        max-width: 45px;
        min-width: 45px;
        max-height: 45px;
        min-height: 45px;
    }
    img {
        border-radius: 50%;
        object-fit: contain;
    }
    img + span {
        margin-left: 5px;
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
    max-height: 25px;
    max-width: 120px;
    padding: 8px 6px;
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
