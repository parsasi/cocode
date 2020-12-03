import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import dateFormatter from '../../helpers/dateFormatter'
import getSession from '../../api/session/getSession'
import { useToken } from '../../hooks/useToken'


const USTabContainer = styled.div`
    width:80%; 
    max-height: 48px; 
    display: flex; 
    flex-direction: row; 
    align-items: center; 
    margin: 12px 0px 12px 0px; 
    position:relative;
    @media (max-width: 1024px) {
        display: none;
    }

    a{
        text-decoration:none;
    }
`;

const USTabLink = styled.div`
    display:flex;
    justify-content:space-between;
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
        margin: 20px 0px -15px 0px; 
        color: #011F3B; 
    }
    p {
        font-size: 14px; 
        font-weight: 400; 
        color: #83919E; 
        margin-bottom: 20px; 
    }
`;

const USLiveContainer = styled.div`
    width:20px;
    height:100%;
    position:absolute;
    right:0;
    top:0;
    display:flex;
    align-items:center;
`

const USLiveDot = styled.span`
    display:inline-block;
    width:10px;
    height:10px;
    border-radius:50%;
    background-color:green;
    animation: blinker 0.7s linear infinite;

    @keyframes blinker {
        50% {
          opacity: 0.3;
        }
      }
`



export default function SingleSession(props){

    const startTime = dateFormatter(props.session.startTime)
    const [token,] = useToken()
    const [session , setSession] = useState({...props.session})


    useEffect(() => {
        const interval = setInterval(async () => {
            const newSession  = await getSession(token , props.session.uuid)
            setSession({...session , ...newSession})
        } , 5000)

        return () => clearInterval(interval)
    } , [])
    

    return (
        <USTabContainer>
            <Link to={`/collabspace/user/${props.session.uuid}`} >
                <USTabLink>
                    <USTabLeft>
                        <img src="/BoxIcon.png"></img>
                    </USTabLeft>
                    <USTabText>
                            <h1>{props.session.category.text}</h1>
                            <p>{startTime} <br/> {props.session.tutor.user.firstName} {props.session.tutor.user.lastName}</p>
                    </USTabText>
                </USTabLink>
            </Link>
            {
                session.isStarted && <USLiveContainer><USLiveDot></USLiveDot></USLiveContainer>
            }
        </USTabContainer>
    )
}