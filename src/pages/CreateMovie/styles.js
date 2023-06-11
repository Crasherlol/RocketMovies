import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    >main{
        grid-area: content;
        display: inline-block;
        overflow-y: auto;

    }

    .tags{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        background-color: rgba(13, 12, 15, 1);
        gap: 30px;
        border-radius: 10px;
        padding: 16px;
        margin-bottom: 90px;
    }

`;
export const Form = styled.form`
    width: 1500px;
    height: 90px;
    margin: 38px auto;

    >header{
        display: flex;
        align-items: start;
        flex-direction: column;
        margin-bottom: 36px;

        a{
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 20px;
            font-size: 20px;
            color: ${({theme}) => theme.COLORS.PINK};
        }
    }
    .sidebyside{
        display: flex;
        flex-direction: row;
        gap: 40px;
    }
    >textarea{
        margin-top: 40px;
        height: 290px;
    }
    .buttons{
        display: flex;
        gap: 40px;
    }
    #firstChild{
        background-color: rgba(13, 12, 15, 1);
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;

