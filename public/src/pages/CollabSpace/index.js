import React, {useEffect, useState} from 'react'
import './CollabSpace.css'
import { useParams , Redirect } from 'react-router-dom'
import styled from "styled-components"
import Sidebar from '../../comps/Sidebar'
import Authenticate from '../../comps/Authenticate/Authenticate'
import getSesion from '../../api/session/getSession'
import { useToken } from '../../hooks/useToken'
import CodeJar from '../../comps/CodeJar'
import createCodejar from '../../api/session/createCodejar'
import SocketContextProvider from '../../comps/ContextProviders/SocketContextProvier'
import VideoCall from '../../comps/VideoCall'

const CollabSpacePage = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    background: #F5F5FB;
`

const CollabContent = styled.div`
  margin:20px 20px 20px 260px;
  width:calc(100% - 300px);
`

export default function CollabSpace() {

  const {role , uuid} = useParams()

  const [session , setSession] = useState({})
  
  const [token] = useToken()

  const createWorkspace = async () => {
    return await createCodejar(token , session.uuid)
  }


  useEffect(() => {
    const fetch = async () => {
        const data = await getSesion(token , uuid)
        setSession(data)
    }
    fetch()
  } , [])


  

  if(role === 'user' || role === 'tutor'){
    return (
      <Authenticate>
        <SocketContextProvider>
          <CollabSpacePage>
            <Sidebar />
            <CollabContent>
              <VideoCall uuid={session.uuid} />
              <CodeJar isTutor={session.isTutor} session={session}  createWorkspace={createWorkspace} />
            </CollabContent>
          </CollabSpacePage>
        </SocketContextProvider>
      </Authenticate>
    )
  }else{
    return <Redirect to="/explore" />
  }
  
}
