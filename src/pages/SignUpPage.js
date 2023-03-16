import styled from "styled-components";
import logocompleta from "../assets/Group 8.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import BaseURL from "../constants/BaseURL";
import { ThreeDots } from "react-loader-spinner";

export default function LoginPage() {

const [disabled, setDisabled] = useState(false);
const navigate = useNavigate(undefined);
const [form, setForm] = useState({email:"", name: "", image: "", password:""});


function handleEvent(event) {
    setForm({...form, [event.target.name]: event.target.value});
}

function sendData(event) {
    event.preventDefault();
    const request = axios.post(`${BaseURL}/sign-up`, 
    form);
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
                <input name="email"  placeholder="email" disabled={disabled} type={"email"} required value={form.email} onChange={handleEvent}></input>
                <input name="password" placeholder="senha" type={"password"} disabled={disabled} required value={form.password} onChange={handleEvent}></input>
                <input name="name" placeholder="nome" required value={form.name} disabled={disabled} onChange={handleEvent}></input>
                <input name="image" placeholder="foto" required value={form.image} disabled={disabled} onChange={handleEvent}></input>
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