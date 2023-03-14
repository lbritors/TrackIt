import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    input {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px ;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        ::placeholder{
                color : #DBDBDB;
        }
    }
    a {
        color: #52B6FF;
    }
    button {
        background-color: #52B6FF;
        border: none;
    }



`

export default GlobalStyle;