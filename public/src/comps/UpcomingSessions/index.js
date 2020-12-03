import React  , {useEffect , useState} from 'react'; 
import styled from 'styled-components'; 
import SingleSession from './SingleSession';
import { useToken } from '../../hooks/useToken';
import getUserAttend from '../../api/attend/getUserAttend';
import {Link} from 'react-router-dom';
import Loading from '../Loading'
import { StepLabel } from '@material-ui/core';

const USTabMain = styled.div`
    max-width: 100%; 
    max-height: 176px; 
    display: flex; 
    flex-direction: column; 
    display:flex;
    flex-direction:column;
    align-items:center;
    
    @media (max-width: 1024px) {
        margin-right: 20px;
    }   
`;

const USText = styled.div`
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
`;

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

//Filters sessions to those that have not yet been attended to
const filterAttend = item => !item.isAttended


const USTab = () => {

    
    const [attends , setAttends] = useState([])
    const [loading , setLoading] = useState(true)


    const [token] = useToken()

    useEffect(() => {
        const fetch = async () => {
            const sessionsData = await getUserAttend(token)
            setAttends(sessionsData.filter(filterAttend))
            setLoading(false)
        }
        fetch() 
    } , [token])


    return (
        <USTabMain>

            <Link to="/MySession" style={{ textDecoration: 'none' }} ><USText>Upcoming Sessions
                <DDIcon src="/DropdownIcon.png"/>
            </USText></Link>
            
            {loading && <LoadingContainer><Loading  /></LoadingContainer>}
            {attends.length ?
                 attends.map(item => <SingleSession session={item.session} />)
                : <NoItem> No Upcoming Sessions </NoItem>    
            }
            
        </USTabMain>
    )
}


export default USTab; 