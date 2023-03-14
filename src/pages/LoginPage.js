import styled from "styled-components";
import logocompleta from "../assets/Group 8.png";
import { Link } from "react-router-dom";

export default function LoginPage() {
    return(
        <LoginContainer>
             <img src={logocompleta}></img>
            <form>
                <input id="email" placeholder="email"></input>
                <input id="senha" placeholder="senha"></input>
                <input id="nome" placeholder="nome" ></input>
                <input id="foto" placeholder="foto"></input>
                <button type="submit">Cadastrar</button>
                <Link>Já tem uma conta? Faça login!</Link>
            </form>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
 display: flex;
    width: 375px;
    height: 667px;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
    img {
        width: 180px;
        height: 178px;
        margin-bottom: 32px;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        input {
        width: 303px;
        height: 45px;
        margin-bottom: 6px;
        
        }
        button {
            width: 303px;
            height: 45px;
            margin-bottom: 25px;
        }
    }   


`