import React, {useState, useEffect} from 'react'; 
import styled from "styled-components"

const Text = styled.div`
    transform: scale(1.2);
`;

const ButtonContainer = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-width: 150px; 
    max-height: 1000px; 
    background-color: #018EA2;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 10px;
    transform: ${props=>props.highlight ? "scale(1)" : "scale(1.1)"};
    transition: 0.4s; 
    color: white;
    cursor: pointer;
    user-select: none; 
`;

const Button = (props) => {
    const[highlight, setHighlight] = useState(true);

    return <ButtonContainer onClick={props.onClick} highlight={highlight} onMouseOver={()=>{
        setHighlight(false);
    }} onMouseLeave={()=>{
        setHighlight(true);
    }}>
        <Text>{props.text}</Text>
    </ButtonContainer>
}

Button.defaultProps = {
    text: "Home",
    highlight: true
}

export default Button; 