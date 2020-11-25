import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import dateFormatter , { secondsToHours } from '../../helpers/dateFormatter'

const USTabLink = styled.div`
    display:flex;
`

const USTabLeft = styled.div`
    max-width: 48px; 
    max-height: 48px; 
    display: flex; 
    justify-content: center;
    margin-right: 20px; 
`; 


const USTabText = styled.div`
    min-width: 138px; 
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

const USTabContainer = styled.div`
    max-width: 246px; 
    max-height: 48px; 
    display: flex; 
    flex-direction: row; 
    align-items: center; 
    margin: 12px 0px 12px 0px; 

    @media (max-width: 1024px) {
        display: none;
    }
`;

export default function SingleSession(props){

    const startTime = dateFormatter(props.session.startTime)

    return (
        <USTabContainer>
            <Link to={`/collabspace/user/${props.session.uuid}`} >
                <USTabLink>
                    <USTabLeft>
                        <img src="/BoxIcon.png"></img>
                    </USTabLeft>
                    <USTabText>
                            <h1>{props.session.category.text}</h1>
                            <p>{startTime}, {secondsToHours(props.session.duration)}</p>
                    </USTabText>
                </USTabLink>
            </Link>
        </USTabContainer>
    )
}