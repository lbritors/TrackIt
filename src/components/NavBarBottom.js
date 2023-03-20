import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";

export default function NavBarBottom(props) {
    const {fetchHabits, porcentagem} = props;
    
    return(
        <ContainerBottom data-test="menu">
            <Link to="/habitos" data-test="habit-link" onClick={fetchHabits}><p>Hábitos</p></Link>
            <Link  to="/hoje">
                <ContainerProgressBar data-test="today-link">
                    <CircularProgressbar background backgroundpadding={8} text={"Hoje"} value={porcentagem} styles={buildStyles({backgroundColor:"#52B6FF", textColor:"#ffffff", textSize:"18px",
                trailColor:"transparent", pathColor: "#ffffff"})}/>
                </ContainerProgressBar>
            </Link>
            <Link data-test="history-link" to="/historico"><p>Histórico</p></Link>
        </ContainerBottom>
    );


}



const ContainerBottom = styled.div`
width: 375px;
height :70px;
display: flex;
bottom: 0;
left: 0;
position: fixed;
background-color: white;
justify-content: space-around;
align-items: center;



    a {
        text-decoration: none;

    }
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
    }

`
const ContainerProgressBar = styled.div`
width: 91px;
height: 91px;
position: absolute;
bottom: 20px;
left: 145px;


`