import React , { useEffect } from 'react'
import getSesion from '../../api/session/getSession'
import { useToken } from '../../hooks/useToken'
import startSession from '../../api/session/startSession'
import Button from '../../comps/Button'
import styled from 'styled-components'



export default function SessionNotStarted(props){

    const NotStartedContainer = styled.div`
        width:100%;
        height:100%;
        padding:40px 0;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    `

    const NotStartedText = styled.div`
        p{
            font-size:1.4rem;
            color:darkgray;
        }
    `
    
    const [token,] = useToken()

    const startSessionHandler = async (e) => {
        e.preventDefault()
        await startSession(token , props.uuid)
    }


    useEffect(() => {
        const interval = setInterval(async() => {
            const data = await getSesion(token , props.uuid)
            if(data.isStarted){
              props.setSession(data)
            }
        } , 5000)
  
        return () => clearInterval(interval)
    } , [])

    if(props.session.isTutor){
        //Give the tutor the option to start the session
        return (
            <NotStartedContainer>
                <NotStartedText>
                    <p> The session is not started yet! </p>
                </NotStartedText>
                <Button onClick={startSessionHandler} text={"Start this session"}></Button>
            </NotStartedContainer>
        )
    }else{
        //Let the student know that the session is not started yet
        return (
            <NotStartedContainer>
                <NotStartedText>
                    <p> Waiting for the tutor to start the session </p>
                </NotStartedText>
            </NotStartedContainer>
        )
    }
}