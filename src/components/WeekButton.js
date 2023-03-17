import styled from "styled-components";

export default function WeekButton() {
    const letters = ["D", "S", "T" , "Q", "Q", "S", "S"];

    return(
        <ButtonContainer>
            {letters.map((l, i) => <button key={i}>{l}</button>)}
        </ButtonContainer>
    )
}


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