import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --primary: #1f4e5f;
        --secondary: #201060;
        --gray: #b3b3b3
    }


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: #121212;
        color: #b3b3b3; 
    }

    body, input, button {
        font: 16px 'Poppins', sans-serif;
    }  
    
    h1, h2, h3, h4, h5, h6, strong {
        color: #fff;
    }

    a {
        text-decoration: none;
        color: #fff;
    }
`