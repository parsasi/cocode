import React , {useState , useEffect} from 'react'
import  * as io from 'socket.io-client'
import {socketUrl} from '../../helpers/serverUrl'
import { useToken } from '../../hooks/useToken'
import socketContext from '../../contexts/socketContext'

export default function SocketContextProvider(props){

    const [token] = useToken()

    const [socket , setSocket] = useState()

    useEffect(() => {
        const newSocket = io(socketUrl, {
            query : {
                token
            }
          });

        setSocket(newSocket)
    }, [])

    return (
        <socketContext.Provider value={socket}>
            {props.children}
        </socketContext.Provider>   
    )
}