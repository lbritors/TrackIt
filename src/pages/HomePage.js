import styled from "styled-components"
import logocompleta from "../assets/Group 8.png"
import { Link } from "react-router-dom"
import { useState } from "react"


export default function HomePage() {
    const [email, setEmail] = useState("");
    





    return (
        <HomeContainer>
            <img src={logocompleta}></img>
            <form>
                <input id="email" placeholder="email" ></input>
                <input id="senha" type={"password"} placeholder="senha"></input>
                <Link to="/hoje"><button type="submit">Entrar</button></Link>
                <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
            </form>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
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