import styled from "styled-components"
import { COLORS } from "./Colors";
import PropTypes from "prop-types"


const ButtonContainer=styled.button`
    background-color: ${COLORS.PRIMARYBUTTONBACKGROUND};
    color: ${COLORS.PRIMARYBUTTONTEXTCOLOR};
    padding: 10px;
    border-radius: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    cursor: pointer;
`;
const IconContainer = styled.img`
   width: 20px;
   height: 20px;
   padding: 5px;
`;
const ButtonSpan =styled.span`
    text-transform: capitalize;
`;
export default function PrimaryButton(props) {
  return (
    <ButtonContainer onClick={props?.handleClick}>
        <ButtonSpan >{props.text}</ButtonSpan>
        {props.icon && <IconContainer src={props.icon}></IconContainer>}
    </ButtonContainer>
  )
}

PrimaryButton.propTypes={
    text:PropTypes.string.isRequired,
    handleClick:PropTypes.func,
    icon:PropTypes.string
}