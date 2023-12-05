import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const Container = styled.div`
    grid-area: header;
    width: 100%;
    height: 116px;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme}) => theme.COLORS.GRAY_300};

    display: flex;
    align-items: center;
    justify-content: space-around;
    
    >h1 {
    width: 100%;
    padding-left: 200px;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;

    color: ${({theme}) => theme.COLORS.PINK};
    }
`;

export const Profile = styled(Link)`
        width: 20%;
        margin-right: 200px;
        display: flex;
        align-items: center;
        flex-direction: row-reverse;

     img{
        width: 45px;
        height: 45px;
        border-radius: 50%;
    }
    .buttonProfile{
        width: 48px;
        height: 48px;
        background-color: transparent;
        border-radius: 50%;
        text-decoration: none;
        border: 1px solid #0000; 
    }

    > div{
        display: flex;
        flex-direction: column;
        margin-right: 9px;
        margin-top: 7px;
        line-height: 24px;
        background-color: #0000;

        >button {
            font-size: 14px;
            font-weight: bold;
            color: ${({theme}) => theme.COLORS.GRAY_500};
            background-color: transparent; 
            width: 28px;
            height: 17px;
            border: 1px solid #0000; 
            text-decoration: none;
            margin-left: 160px;

        }
        
        strong {
            font-size: 18px;
            color: ${({theme}) => theme.COLORS.WHITE};
            margin-left: 75px;
        }
    }
`;
