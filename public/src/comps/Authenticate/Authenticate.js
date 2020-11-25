import React , {useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { useToken } from '../../hooks/useToken'
import { useUser } from '../../hooks/useUser'
import getUser from '../../api/user/getUser'

export default function Authenticate(props){

    const [token , ] = useToken()
    const [user , setUser ] = useUser()
    const history = useHistory()
    

    useEffect(() => {
        const fetch = async () => {
            const userData = await getUser(token)
            setUser(userData)
        }

        if(token){
            if(!user.username){
                fetch()
            }
        }else{
            console.log('NOT Logged in')
            history.push('/')
        }

    } , [user , setUser])

    return (
        <>
            {props.children}
        </>
    )
}