import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import BaseURL from "../constants/BaseURL";

export default function HabitList(props) {
    const {token} = props;
    const [habitFetched, setHabitFetched] = useState([]);
    const letters = ["D", "S", "T" , "Q", "Q", "S", "S"];



    useEffect(() => {
        const url = `${BaseURL}/habits`;
        const config = {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        }
        const promise = axios.get(url, config);
        promise.then((res) => {
            console.log(res.data)
            setHabitFetched([...habitFetched, res.data]);
        });
        promise.catch((err) => alert(err.response.data.message));
    }, [])

    return(
        <> 

            <HabitItem letters={letters} habitFetched={habitFetched}>  </HabitItem>
            
        </>
    );

}

function HabitItem(props) {
    const {letters, habitFetched} = props

    return(
        <Container>
            <p>h.name</p>
            <ButtonContainer>
            {letters.map((l, i) => <button key={i}>{l}</button>)}
            </ButtonContainer>
        </Container>


    );

}



const Container= styled.div`
height: 91px;
width: 340px;
border-radius: 5px;
background-color: white;


`

const ButtonContainer = styled.div`
display: flex;

   
        button {
        border: 1px solid #D4D4D4;
        height: 30px;
        width: 30px;
        border-radius: 5px;
        background-color: white;
        color:  #DBDBDB ;
        margin: 10px 2px;
        
        }

`