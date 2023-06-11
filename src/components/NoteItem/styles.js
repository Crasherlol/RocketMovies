import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.GRAY_300};
    color: ${({theme}) => theme.COLORS.GRAY_500};

    border: ${({theme, isNew}) => isNew ? `3px dashed ${theme.COLORS.WHITE_200}` : "none"};
    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

     >button{
        border: none;
        background: none;
        font-size: 20px;
     }

     .button-delete{
        color: ${({theme}) => theme.COLORS.PINK};
     }

     .button-add{
        color: ${({theme}) => theme.COLORS.PINK};
     }

     >input{
        height: 56px;
        width: 100%;

        padding: 12px;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;

        border: none;

        &::placeholder{
            color: ${({theme}) => theme.COLORS.GRAY_500};

        }
     }
`;