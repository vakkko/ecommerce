import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
font-family: "Poppins", sans-serif;
}

a{
    text-decoration: none;
    cursor: pointer;
}

button{
background-color: transparent;
border: none;
}

input{
    outline: none;
}

:root{
   --darkBlue: #10151F;
   --gray2: #E1DFE1;
   --darkBlue2: #3E424A;
   --red: #FF4000;
}
`;

export default GlobalStyles;
