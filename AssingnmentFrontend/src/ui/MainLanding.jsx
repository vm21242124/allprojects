import styled from "styled-components"
import { COLORS } from "./common/Colors";
import MainHero from "./component/MainHero";


const MainContainer=styled.div`
    width: 100%;
    background-color: ${COLORS.MAINBACKGROUND};
    color: ${COLORS.DEFAULTFONTCOLOR};
`;


export default function MainLanding() {
  return (
    <MainContainer>
       <MainHero/>
    </MainContainer>
  )
}
