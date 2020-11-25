import React , {useContext} from 'react'
import socketContext from '../contexts/socketContext'

export function useSocket(){
    
    const socket = useContext(socketContext)

    const emit = (eventName , payload) => {
        socket.emit && socket.emit(eventName , {
            ...payload
        })
    }
    const on = (eventName , callback) => {
        return socket.on && (socket.on(eventName , data => {callback(data)}))
    }
    return [emit , on]
}