import {useContext} from 'react'
import userContext from '../contexts/userContext'


export function useUser(){
    return useContext(userContext)
}