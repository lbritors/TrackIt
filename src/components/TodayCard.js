import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components"
import BaseURL from "../constants/BaseURL";
import UserContext from "../UserContext";


export default function TodayCard(props) {
    const {token} = useContext(UserContext);
    const {name, id, highestSequence, currentSequence, done, feito, setFeito, setUpdate, update, verde} = props;
    

    function checkUncheck(id, done) {
        if(done === false) {
            const url = `${BaseURL}/habits/${id}/check`;
            const body = "";
            const config = {
                headers: {
                "Authorization": `Bearer ${token}`
            }
        }
            const promise = axios.post(url, body, config);
            promise.then((res) => {
                setUpdate(!update);
                console.log(res.data);
                setFeito(...feito, id);
                });
            promise.catch((err) => console.log(err.response.data));
        } else {
            
            const url2 = `${BaseURL}/habits/${id}/uncheck`;
            const body2 = "";
            const config2 = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            const promise2 = axios.post(url2, body2, config2);
            promise2.then((res) => {
                setUpdate(!update);
                console.log(res.data);
                const naoFeito = feito.filter(f => f !== id);
                setFeito(naoFeito)})
            promise2.catch((err) => console.log(err.response.data));
        
        }
    }   

    return (

        <ContainerConteudo feito={feito} id={id} verde={verde} data-test="today-habit-container">
            <div>
                <p data-test="today-habit-name">{name}</p>
                    <div>
                        <p data-test="today-habit-sequence">{`Sequência atual: ${currentSequence} dias`}</p>
                        <p data-test="today-habit-record">{`Seu recorde: ${highestSequence} dias`}</p>
                    </div>
            </div>
            <ion-icon name="checkbox" data-test="today-habit-check-btn" onClick={ () => {setUpdate(true); checkUncheck(id, done) }} 
          ></ion-icon>
        </ContainerConteudo>

    )
}


const ContainerConteudo = styled.div`
width: 340px;
height: 94px;
background-color: white;
border-radius: 5px;
margin-top: 10px;
display: flex;
justify-content: space-between;
align-items: center;
overflow-y: scroll;
div{

    p{
    margin-left: 5px;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-top: 10px;
    }
    div{
        margin-top: 5px;
        p {
        font-size: 13px;
        line-height: 10px;
        color: #666666;
        }
    }
  
}
ion-icon{
font-size: 75px;
color: ${({verde}) => verde === "verde" ? "#8FC549" : "#E7E7E7" };

}
  

`
const Green = styled.div`
color: #8FC549;



`