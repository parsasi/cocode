import React , {useState , useEffect} from 'react'
import SocketContext from '../../contexts/socketContext'
import * as io from 'socket.io-client'
import serverUrl from '../../helpers/serverUrl'
import { useToken } from '../../hooks/useToken'

export default function SocketContextProvider(props){

    const [token] = useToken()
    
    const [socket , setSocket] = useState({})

    const serverUrl = 'http://localhost:8080'

    useEffect(() => {
        
        // const socket = io(serverUrl)
        // socket.use((socket, next) => {
        //     socket.handshake.headers['authorization'] = token
        //     return next()
        // })
        
        // setSocket(socket)
    } , [])

    return (
        <SocketContext.Provider value={socket}>
            {props.children}
        </SocketContext.Provider>
    )
}