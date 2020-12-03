import React from 'react'
import Authenticate from '../../comps/Authenticate/Authenticate'
import SocketContextProvider from '../../comps/ContextProviders/SocketContextProvier'
import Sidebar from '../../comps/Sidebar'
import styled from "styled-components"


const CollabContent = styled.div`
  margin:20px 20px 20px 260px;
  width:calc(100% - 300px);
`
const CollabSpacePage = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    background: #F5F5FB;
`

export default function CollabEnviroment(props){
    return (
    <Authenticate>
        <SocketContextProvider>
            <CollabSpacePage>
                <Sidebar />
                <CollabContent>
                    {props.children}
                </CollabContent>
            </CollabSpacePage>
        </SocketContextProvider>
    </Authenticate>
    )
}