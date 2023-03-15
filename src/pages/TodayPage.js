import NavBarBottom from "../components/NavBarBottom"
import NavBarTop from "../components/NavBarTop"
import styled from "styled-components"

export default function TodayPage() {

return (
    <>
        <NavBarTop/>
        <ContainerToday>
            <ContainerTitulo>
                <h2>Segunda 14/03</h2>
                <h3>Nunhum hábito concluído ainda</h3>
            </ContainerTitulo>
            <ContainerConteudo>
                <div>
                    <p>Ler 1 capítulo de livro</p>
                    <div>
                        <p>Sequência atual: 3 dias</p>
                        <p>Seu recorde: 5 dias</p>
                    </div>
                </div>
                <ion-icon name="checkbox"></ion-icon>
            </ContainerConteudo>
        </ContainerToday>
        <NavBarBottom/>
    
    
    </>
)

}

const ContainerToday = styled.div`
background-color: #F2F2F2;
height: 667px;
width: 375px;
border-radius: 0px;
margin-top: 70px;
display: flex;
flex-direction: column;
align-items: center;
    

`

const ContainerTitulo = styled.div`
width: 360px;
height: 80px;
display: flex;
flex-direction: column;
justify-content: center;
font-family: 'Lexend Deca';

    h2 {
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
   
    font-style: normal;
    font-weight: 400;
    margin-left: 15px;
    }
    h3 {
        color: #BABABA;
        font-size: 18px;
        line-height: 22px;
        margin-top: 6px;
        margin-left: 15px;
    }

`

const ContainerConteudo = styled.div`
width: 340px;
height: 94px;
background-color: white;
border-radius: 5px;
margin-top: 10px;
display: flex;
justify-content: space-between;
align-items: center;
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
color: #E7E7E7;

}
  



`