import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialised;


}
body, input, button, textarea{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
}
a {
    text-decoration: none;
}
button, a {
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover {
    filter: brightness(0.9); 
}

::-webkit-scrollbar {
    display: flex;
    width: 14px;

}


::-webkit-scrollbar-track {
    background: transparent;
    
}

::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.COLORS.PINK};
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    
}

::-webkit-scrollbar-thumb:hover {
    background-color: pink;
    
}
`;