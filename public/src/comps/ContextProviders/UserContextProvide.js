import React , {useState} from 'react'
import UserContext from '../../contexts/userContext'

export default function UserContextProvider(props){
    
    const [user , setUser] = useState({})

    return (
        <UserContext.Provider value={[user , setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}