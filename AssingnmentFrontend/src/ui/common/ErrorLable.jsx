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
export default function ErrorLable(props) {
    useEffect(()=>{
        if(props.errormessage!==''){
            setTimeout(()=>{
                props.setError('');
            },5000)
        }
    },[props.errormessage])
  return (
    <ErrorContainer>
        <ErrorMessage>

        {props.errormessage}
        </ErrorMessage>
        <CloseIcon src={ICONS.CLOSEICON} onClick={()=>props.setError('')}/>
    </ErrorContainer>
  )
}

ErrorLable.propTypes={
    errormessage:PropTypes.string,
    setError:PropTypes.string
}