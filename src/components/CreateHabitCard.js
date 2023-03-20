import styled from "styled-components";
import { useState } from "react";
import BaseURL from "../constants/BaseURL";
import axios from "axios";



export default function CreateHabitCard(props) {

    const { nameHabit, setNameHabit, clickedDay, setClickedDay, token, dataCard, setDataCard, setClicou} = props;
    const days = [0, 1, 2, 3, 4, 5, 6];
    const letters = ["D", "S", "T" , "Q", "Q", "S", "S"];
    console.log(clickedDay);
    const [disabled, setDisabled] = useState(false);

    function sendHabit(event) {
        event.preventDefault();
        const url = `${BaseURL}/habits`;
        const body = {name: nameHabit, days: clickedDay};
        const config = {
            headers: {
                "Authorization": `Bearer ${token} `
            }
        }
        const promise = axios.post(url, body, config);
        promise.then((res) => {
            setClicou(false)
            setDisabled(true)
            console.log(res.data);
            setDataCard([...dataCard, res.data]); 
            setNameHabit("");
            setClickedDay([]);
                            }
        );
        promise.catch((err) => {
            console.log((err) => err.response.data)
            alert(err.response.data.message)});

    }

    // if(dataCard.length === 0) {
    //     setDisabled(true);
    // }

    return(
        <CadastroHabito>
            <input required disabled={disabled} placeholder="nome do hábito" data-test="habit-name-input" value={nameHabit} onChange={e=> setNameHabit(e.target.value)}></input>
            
                <div>
                <Button days={days}setClickedDay={setClickedDay}  clickedDay={clickedDay} letters={letters}></Button>
                
                </div>
           
                <form onSubmit={sendHabit}>
                    <button type="button" data-test="habit-create-cancel-btn" onClick={() => setClicou(false)}>Cancelar</button>
                    <button type="submit" data-test="habit-create-save-btn" disabled={disabled} >Salvar</button>
                </form>
        </CadastroHabito>
    );


}

function Button(props) {
    const { days, setClickedDay, clickedDay, letters } = props;

    return(
        <ButtonContainer clickedDay={clickedDay}>
            <div>{days.map((d, i) => <button data-test="habit-day" onClick={() => setClickedDay([...clickedDay, i])} ativo={clickedDay.includes(i) ? "ativo" : "naoAtivo"} id={i} key={i}>{letters[i]}</button>)}</div>
        </ButtonContainer>
    );
}



const CadastroHabito = styled.div`
height: 180px;
width: 340px;
border-radius: 5px;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
    input {
        border: 1px solid #D4D4D4;
        height: 45px;
        width: 303px;
        left: 36px;
        top: 165px;
        border-radius: 5px;
    }
    form {
       button {
        :nth-of-type(1) {
            background-color: white;
            color: #52B6FF;
            font-size: 15.976px;
            line-height: 20px;
            text-align: center;

        }
       }
    }
    

`

const ButtonContainer = styled.div`
display: flex;

    div{
        button {
        border: 1px solid #D4D4D4;
        height: 30px;
        width: 30px;
        border-radius: 5px;
        background-color:  ${({ativo}) => ativo === "ativo" ? "#CFCFCF" : "white" };
        color:  #DBDBDB ;
        margin: 10px 2px;
        
        }
    }




`