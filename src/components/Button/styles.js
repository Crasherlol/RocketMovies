import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const Container = styled.button`
width: 100%;
background-color: ${({theme}) => theme.COLORS.PINK};
color: ${({theme}) => theme.BACKGROUND_900};

display: flex;
align-items: center;
justify-content: center;

height: 56px;
border: 0;
padding: 0 16;
margin-top: 16px;
border-radius: 10px;
font-weight: 500;

&:disabled{
    opacity: 0.5;
}
>svg {
    color: ${({theme}) => theme.BACKGROUND_900};
    font-size: 16px;
    margin-right: 8px;
}
`;