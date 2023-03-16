import styled from "styled-components"
import logocompleta from "../assets/Group 8.png"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import BaseURL from "../constants/BaseURL";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../UserContext";


export default function LoginPage(props) {
    const {setToken}  = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(undefined);
    const [disabled, setDisabled] = useState(false);

function doLogin(event) {
    event.preventDefault();
    const url = `${BaseURL}/login`;
    const promise = axios.post(url, {email: email, password: password});
    promise.then((res) => {
        console.log(res.data);
        setToken(res.data.token);
        navigate("/hoje");
    });

    promise.catch((err) => alert(err.response.data.message));
}


    return (
        <LoginContainer>
            <img src={logocompleta}></img>
            <form onSubmit={doLogin}>
                <input placeholder="email" type={"email"} value={email} required disabled={disabled} onChange={e => setEmail(e.target.value)}></input>
                <input type={"password"} placeholder="senha" value={password} required disabled={disabled} onChange={e => setPassword(e.target.value)} ></input>
                <button type="submit" disabled={disabled}>
                    {disabled === false ? <ContainerButton disabled={disabled}><p>Entrar</p></ContainerButton> :
                    <ContainerButton disabled={disabled}>
                        <ThreeDots  height={80} width="80" radius="9" ariaLabel="three-dots-loading" wrapperStyle={{display:"flex"}} color="white"/> 
                    </ContainerButton>}
                </button>
                <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
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
            background: ${({disabled}) => disabled ? "#52b6ffb3" : "#52b6ff" }
            /* opacity: ${({disabled}) => disabled ? "0.4" : "1"}; */
        }
    }   
    

`

const ContainerButton = styled.div`
width: 303;
height: 45px;
display: flex;
justify-content: center;
align-items: center;


 p{
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    
 }

`