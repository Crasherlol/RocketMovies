import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const Container = styled.div`
    width: 1400px;
    background-color: ${({theme}) => theme.COLORS.PINKRGB};

    border: 1px solid #000000;
    border-radius: 16px;

    margin-left: 30px;
    padding: 22px;
    >h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    >span{
        color: ${({theme}) => theme.COLORS.GRAY_500};
        display: flex;
        text-align: left;
        margin-top: 8px;
    }

    > footer {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        margin-top: 24px;
    }
    .ratio{
        color: ${({theme}) => theme.COLORS.PINK};
        margin-top: 8px;
        display: flex;
        width: 84px;
        height: 12px;
        flex-direction: row;
        align-items: flex-start;
    }
`;