import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import dateFormatter , { secondsToHours } from '../../helpers/dateFormatter'

const USTabLink = styled.div`
    display:flex;
    width:80%;
    margin:0 auto;
`

const USTabLeft = styled.div`
    max-width: 48px; 
    max-height: 100%; 
    display: flex; 
    justify-content: center;
    align-items:center;
    margin-right: 20px; 
`; 


const USTabText = styled.div`
    width:100%;
    text-align: start;
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    
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

const USTabContainer = styled.div`
    width:100%;
    max-height: 48px; 
    display: flex; 
    flex-direction: row; 
    align-items: center; 
    justify-content:space-between;
    margin: 12px 0px 12px 0px; 

    a{
        display:inline-block;
        width:100%;
    }

    @media (max-width: 1024px) {
        display: none;
    }
`;

export default function SingleSession(props){

    const startTime = dateFormatter(props.session.startTime)

    return (
        <USTabContainer>
            <Link to={`/collabspace/tutor/${props.session.uuid}`} >
                <USTabLink>
                    <USTabLeft>
                        <img src="/BoxIcon.png"></img>
                    </USTabLeft>
                    <USTabText>
                            <h1>{props.session.category.text}</h1>
                            <p>{startTime}<br/> for {secondsToHours(props.session.duration)}</p>
                    </USTabText>
                </USTabLink>
            </Link>
        </USTabContainer>
    )
}