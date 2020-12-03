import React, { useEffect , useState } from 'react' 
import styled from 'styled-components'
import Authenticate from '../Authenticate/Authenticate'
import { Link } from 'react-router-dom'
import SingleRequest from './SingleRequest'
import getUserRequests from '../../api/request/getUserRequests'
import { useToken } from '../../hooks/useToken'
import Loading from '../Loading'

const PRTabMain = styled.div`
    max-height: 176px; 
    display: flex; 
    flex-direction: column; 
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1024px) {
        margin-right: 30px;
    }   
`;

const PRText = styled.div`
    max-width: 200px; 
    max-height: 22px; 
    text-align: start;
    padding-left: 5px;
    font-size: 18px; 
    font-weight: 600; 
    color: #011F3B; 
    margin-bottom: 15px; 
    cursor: pointer;

    @media (max-width: 1024px) {
        margin-bottom: 0;
    }   
`; 

const DDIcon = styled.img`
    max-height: 20px;
    max-width: 20px;
    align-self: center;
    display: none;
    margin-left: 10px;

    @media (max-width: 1024px) {
        display: inline-flex;
    }   
`

const NoItem = styled.span`
    color:gray;
    display:block;
    margin:10px auto;
    text-align:center;
    font-size:0.9rem;
`

const LoadingContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
`

const PRTab = () => {

    const [requests , setRequests] = useState([])
    const [loading , setloading] = useState(true)
    const [token] = useToken()

    useEffect(() => {
        async function fetch(){
            const data = await getUserRequests(token) 
            setRequests(data)
            setloading(false)
        }
        fetch()
    } , [])

    return (
        <Authenticate>
            <PRTabMain>

            <Link to="/MySession" style={{ textDecoration: 'none' }} >
                <PRText>
                    Pending Requests 
                    <DDIcon src="/DropdownIcon.png"/>
                </PRText>
            </Link>
            
            {loading && <LoadingContainer><Loading /></LoadingContainer>}

            {requests.length ?
                requests.map(item => <SingleRequest category={item.category} tutor={item.tutor.user} request={item} />)
                : <NoItem> No Pending Requests </NoItem>
            }
            

            </PRTabMain>   
        </Authenticate>

    )
}

PRTab.defaultProps = {
}

export default PRTab; 