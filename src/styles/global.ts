import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        list-style: none;
        text-decoration: none;
        outline: 0;
    }

    html, body, #root{
        /* background: ${props => props.theme.colors.background}; */
        font-size: 100%;
        color: ${props => props.theme.colors.text};
        height: 100%;
        width: 100%;
        /* overflow: hidden; */
        padding: 0;
        margin: 0;
    } 
`;