import React from 'react'
import styled from 'styled-components'



const PRTabContainer = styled.div`
    max-width: 246px; 
    max-height: 48px; 
    display: flex; 
    flex-direction: row; 
    align-items: center; 
    margin: 12px 0px 12px 0px; 
        display: flex;
    width: 100%;

    @media (max-width: 1024px) {
        display: none;
    }
`;

const PRTabLeft = styled.div`
    max-width: 48px; 
    max-height: 48px; 
    display: flex; 
    justify-content: center;
    margin-right: 20px; 
    
`; 

const PRTabText = styled.div`
    min-width: 200px; 
    max-height: 42px; 
    justify-content: center; 
    text-align: start;
    display: flex; 
    flex-direction: column; 
    h1 {
        font-size: 16px;
        font-weight: 600; 
        margin: 20px 0px -5px 0px; 
        color: #011F3B; 
    }
    p {
        font-size: 14px; 
        font-weight: 400; 
        color: #83919E; 
        margin-bottom: 20px; 
    }
`;

const PRTabRight = styled.div`
    max-width: 22px; 
    max-height: 22px; 
    display: flex; 
    margin-left: -35px; 
    margin-top: -25px;
    cursor: pointer; 
    transition: 0.3s;
    &:hover{
        transform : scale(1.3);
    }
`;


export default function SingleSession(props){
    return (
        <PRTabContainer>
            <PRTabLeft>
                <img src="/PencilIcon.png"></img>
            </PRTabLeft>
            <PRTabText>
                <h1>{props.category.text}</h1>
                <p>{props.tutor.firstName} {props.tutor.lastName}</p>
            </PRTabText>
            <PRTabRight> 
                <img src="/InformationIcon.png"></img>
            </PRTabRight>
        </PRTabContainer>
    )
}
