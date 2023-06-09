import styled from "styled-components";
import logocompleta from "../assets/Group 8.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import BaseURL from "../constants/BaseURL";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../UserContext";

export default function SignUpPage() {
const [form, setForm] = useState({email:"", name: "", image: "", password:""});
const [disabled, setDisabled] = useState(false);
const navigate = useNavigate(undefined);

console.log(form);

function handleEvent(event) {
    setForm({...form, [event.target.name]: event.target.value});
}

function sendData(event) {
    event.preventDefault();
    setDisabled(true);
    const request = axios.post(`${BaseURL}/auth/sign-up`, 
    form);
    request.then((res) => navigate("/"));
    request.catch((err) => {
        setDisabled(false);
        alert(err.response.data.message);
        });
}


    return(
        <LoginContainer>
             <img src={logocompleta}></img>
            <form onSubmit={sendData}>
                <input name="email" data-test="email-input" placeholder="email" disabled={disabled} type={"email"} required value={form.email} onChange={handleEvent}></input>
                <input name="password" data-test="password-input" placeholder="senha" type={"password"} disabled={disabled} required value={form.password} onChange={handleEvent}></input>
                <input name="name" placeholder="nome" data-test="user-name-input" required value={form.name} disabled={disabled} onChange={handleEvent}></input>
                <input name="image" placeholder="foto" data-test="user-image-input" required value={form.image} disabled={disabled} onChange={handleEvent}></input>
                <button type="submit" disabled={disabled} data-test="signup-btn">
                   { disabled === false ? <ContainerButton>Cadastrar</ContainerButton> :
                    <ThreeDots visible={disabled} height={80} width="80" radius="9" ariaLabel="three-dots-loading" wrapperStyle={{display:"flex"}} color="white"/>}
                </button>
                <Link to="/" data-test="login-link">Já tem uma conta? Faça login!</Link>
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