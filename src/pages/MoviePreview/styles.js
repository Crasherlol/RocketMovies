import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    svg, a{
        color: ${({theme}) => theme.COLORS.PINK};
        }
        
    
    .headerPost{
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: flex-start;
        margin: 40px 200px;
        gap: 30px;
        >h1 {
            font-size: 45px;
        }
        svg{
            font-size: 18px;

        }
        .ratio {
            display: flex;
            flex-direction: row;
            align-items: center;
            column-gap: 15px;;
            
        }
    }
    .tags{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 0 200px;
        

        >span{
            font-size: 18px;
            background-color: ${({theme}) => theme.COLORS.PINKRGB}; 
            height: 40px;
        }
    }
    .spanWrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        gap: 10px;

        >img {
            border-radius: 50%;
            width: 25px;
            height: 25px;
        }
    }
    .movieText{
        display: flex;
        margin: 45px 200px;
        justify-content: start;
        align-items: flex-start;
        text-align: justify;
        width: 1600px;
        height: 500px;
        overflow-y: auto;
        >p{
            font-size: 22px;
            color: rgba(244, 237, 232, 1);
        }
    }
    
`;