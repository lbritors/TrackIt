import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../UserContext";

export default function NavBarTop() {
    const {form, userData} = useContext(UserContext);
    console.log(userData);

    return(
        <TopContainer data-test="header">
            <h1>TrackIt</h1>
            <img src={userData.image}></img>
        </TopContainer>
    );

}


const TopContainer = styled.div`
height: 70px;
width: 375px;
border-radius: 0px;
display: flex;
background-color:#126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
position: fixed;
top: 0;
left: 0;
justify-content: space-between;
align-items: center;
    h1{
        margin-left: 15px;
    }
    img {
    width: 51px;
    height: 51px;
    border-radius: 98px;
    margin-right: 15px;  
    }






`