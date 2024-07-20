import styled from "styled-components";
import PropTypes from 'prop-types';
import { ICONS } from "./Icons";
import { useEffect } from "react";

const ErrorContainer=styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:1rem;
    top: 10%;
    padding: 10px;
    background-color: #ff4848;
    color: white;
    @media (min-width: 768px) {
        right: 20%;
    }
`;
const ErrorMessage = styled.span`
    
`;
const CloseIcon = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
`;
export default function SuccessLable(props) {
    useEffect(()=>{
        if(props.successMessage!==''){
            setTimeout(()=>{
                props.setSuccess('');
            },5000)
        }
    },[props.successMessage])
  return (
    <ErrorContainer>
        <ErrorMessage>

        {props.successMessage}
        </ErrorMessage>
        <CloseIcon src={ICONS.CLOSEICON} onClick={()=>props.setSuccess('')}/>
    </ErrorContainer>
  )
}

SuccessLable.propTypes={
    successMessage:PropTypes.string,
    setSuccess:PropTypes.string
}