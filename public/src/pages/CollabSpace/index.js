import React, {useEffect, useState} from 'react'
import './CollabSpace.css'
import styled from 'styled-components'
import { useParams , Redirect } from 'react-router-dom'
import getSesion from '../../api/session/getSession'
import { useToken } from '../../hooks/useToken'
import CodeJar from '../../comps/CodeJar'
import VideoCall from '../../comps/VideoCall'
import SessionNotStarted from './SessionNotStarted'
import Loading from '../../comps/Loading'
import CollabEnviroment from './CollabEnviroment'


export default function CollabSpace() {

  const {role , uuid} = useParams()

  const [session , setSession] = useState({})

  const [loading , setLoading] = useState(true)
  
  const [token] = useToken()


  const LoadingContainer = styled.div`
      width:100%;
      height:500px;
      display:flex;
      justify-content:center;
      align-items:center;
  `

 
  useEffect(() => {
      async function fetch(){
        const data = await getSesion(token , uuid)
          setSession(data)
          setLoading(false)
      }
      fetch()
  } , [])
  

  if(role === 'user'){
    if(!loading){
      if(session.isStarted){
        return (
          <CollabEnviroment>
            <VideoCall uuid={session.uuid} />
            <CodeJar isTutor={session.isTutor} session={session} />
          </CollabEnviroment>
        )
      }else{
        return (
          <CollabEnviroment>
            <SessionNotStarted session={session} setSession={setSession} uuid={uuid}/>
          </CollabEnviroment>
        )
      }
    }else{
      return (
        <CollabEnviroment>
          <LoadingContainer><Loading /></LoadingContainer>
        </CollabEnviroment>
      )
    }
  }else if(role === 'tutor'){
    if(!loading){
      if(!session.isTutor){
        return <Redirect to="/explore" />
      }
      if(session.isStarted){
        return (
          <CollabEnviroment>
            <VideoCall uuid={session.uuid} />
            <CodeJar isTutor={session.isTutor} session={session}/>
          </CollabEnviroment>
        )
      }else{
        return (
          <CollabEnviroment>
            <SessionNotStarted session={session} setSession={setSession} uuid={uuid} />
          </CollabEnviroment>
        )
      }
    }else{
      return (
        <CollabEnviroment>
          <LoadingContainer><Loading /></LoadingContainer>
        </CollabEnviroment>
      )
    }
  }else{
    return <Redirect to="/explore" />
  }
  
}
