import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
    "header header"
    "brand brand"
    "content content";

    .inputArea{
        grid-area: header;
        display: flex;
        width: 40%;
        display: flex;
        justify-self: center;
        align-items: center;

    }

   
`;



export const Brand = styled.div`
    grid-area: brand;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    
    >a {
        width: 206px;
    }
`;

export const Content = styled.div`
    max-height: 630px;
    width: 1450px;
    overflow-y: scroll;
    grid-area: content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px auto;
    gap: 24px;

    
`;