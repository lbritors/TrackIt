import styled from "styled-components";
import logocompleta from "../assets/Group 8.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import BaseURL from "../constants/BaseURL";
import { ThreeDots } from "react-loader-spinner";

export default function LoginPage() {
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [nome, setNome] = useState("");
const [foto, setFoto] = useState("");
const [disabled, setDisabled] = useState(false);
const navigate = useNavigate(undefined);
const [loading, setLoading] = useState("")

function sendData(event) {
    event.preventDefault();
    const request = axios.post(`${BaseURL}/sign-up`, 
    {email: email, name: nome, image: foto, password: senha});
    request.then((res) => navigate("/"));
    request.catch((err) => alert(err.response.data.message));
}


if( navigate === undefined) {
    setDisabled(true);

}

    return(
        <LoginContainer>
             <img src={logocompleta}></img>
            <form onSubmit={sendData}>
                <input id="email"  placeholder="email" disabled={disabled} type={"email"} required value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input id="senha" placeholder="senha" type={"password"} disabled={disabled} required value={senha} onChange={(e) => setSenha(e.target.value)}></input>
                <input id="nome" placeholder="nome" required value={nome} disabled={disabled} onChange={(e) => setNome(e.target.value)}></input>
                <input id="foto" placeholder="foto" required value={foto} disabled={disabled} onChange={(e) => setFoto(e.target.value)}></input>
                <button type="submit" disabled={disabled}>
                   { disabled === false ? <ContainerButton>Cadastrar</ContainerButton> :
                    <ThreeDots visible={disabled} height={80} width="80" radius="9" ariaLabel="three-dots-loading" wrapperStyle={{display:"flex"}} color="white"/>}
                </button>
                <Link to="/">Já tem uma conta? Faça login!</Link>
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
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }   


`

const ContainerButton = styled.div`
width: 290px;
height: 40px;
font-size: 20.976px;
line-height: 26px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
`