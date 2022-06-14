import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    /* :root{
        
        --light-mode-shadow: #e0e0e0;
        --light-mode-bg: hsl(0, 0%, 98%);
        --light-mode-text: hsl(200, 15%, 8%);
        --light-mode-input: hsl(0, 0%, 52%);

        --dark-mode-elements: hsl(209, 23%, 22%);
        --dark-mode-bg: hsl(207, 26%, 17%);
    } */
    .App{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem 5rem;
    }
    body{
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        transition: all .5s linear;
        font-family: "Nunito Sans", sans-serif;
    }
`;