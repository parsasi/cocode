import React  , {useEffect , useState} from 'react'; 
import styled from 'styled-components'; 
import SingleSession from './SingleSession'
import { useToken } from '../../hooks/useToken'
import getTutorSession from '../../api/session/getTutorSession'

const USTutorTabMain = styled.div`
    width:100%;
    display: flex; 
    flex-direction: column; 

    @media (max-width: 1024px) {
        margin-right: 20px;
    }   
`;

const USText = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    max-height: 22px; 
    text-align: center;
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



const USTutorTab = () => {

    
    const [sessions , setSessions] = useState([])

    const [token] = useToken()

    useEffect(() => {
        const fetch = async () => {
            const sessionsData = await getTutorSession(token)
            setSessions(sessionsData)
        }
        fetch() 
    } , [token])



    return (
        <USTutorTabMain>

            <USText>Upcoming Tutoring
                <DDIcon src="/DropdownIcon.png"/>
            </USText>
            
            {
                sessions.map(item => <SingleSession session={item} />)
            }
            

        </USTutorTabMain>
    )
}


export default USTutorTab; 