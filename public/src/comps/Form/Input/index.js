import React from 'react'; 
import styled, {css} from "styled-components";

const InputCon = styled.div`
    display:flex;
    flex-direction:column;
    outline: none;
    width: ${props=>props.width};
`;

const Label = styled.label`
    font-size: ${props=>props.fontSize};
    font-weight: ${props=>props.fontWeight};
    width:384px; 
`;

const EnterInfo = styled.input`
    margin-top:10px;
    background-color:#D6D6D6;
    width: ${props=>props.width};
    height: ${props=>props.height};
    border:hidden;
    border-radius: 5px;
    margin-bottom: 15px;
    padding-left: 10px;
    outline: none;
`;

const InPut = ({fontSize, fontWeight, label, type, ph, width, height}) => {
    return <InputCon>
        <Label fontSize={fontSize} fontWeight={fontWeight}>{label}</Label>
        <EnterInfo height={height} width={width} type={type} placeholder={ph}></EnterInfo>
    </InputCon>   
}

InPut.defaultProps = {
    label:"Username",
    type:"text",
    ph:"Username",
    height: "50px",
    width: "384px",
    fontSize: "13pt",
    fontWeight: "400"
}

export default InPut; 
