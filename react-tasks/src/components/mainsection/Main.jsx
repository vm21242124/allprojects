import Tasks from "../tasks/Tasks";
import {  MainContainer, Mainheading } from "./Main.styles";


export default function Main() {
  return (
   <MainContainer>
    <Mainheading>Coding Task</Mainheading>
    <Tasks/>
   </MainContainer>
  )
}
