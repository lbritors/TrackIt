import styled from "styled-components"
import logocompleta from "../assets/Group 8.png"
import { Link } from "react-router-dom"
import { useState } from "react"
import BaseURL from "../constants/BaseURL";
import axios from "axios";


export default function HomePage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

function doLogin(event) {
    event.preventDefault();
    const url = `${BaseURL}/login`;
    const promise = axios.post(url, {email: email, password: password});
    promise.then((res) => console.log(res.data));
    promise.catch((err) => alert(err.response.data.message));

}



    return (
        <HomeContainer>
            <img src={logocompleta}></img>
            <form onSubmit={doLogin}>
                <input name="email" placeholder="email" value={email} onChange={setEmail(e => e.target.value)}></input>
                <input name="senha" type={"password"} placeholder="senha" value={password} onChange={(e) => setPassword(e=> e.target.value)}></input>
                <Link><button type="submit">Entrar</button></Link>
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