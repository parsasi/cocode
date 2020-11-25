import React, {useState} from 'react' 
import styled from 'styled-components'
import Authenticate from '../Authenticate/Authenticate'
import {Link} from 'react-router-dom';

const PRTabMain = styled.div`
    max-width: 246px; 
    max-height: 176px; 
    display: flex; 
    flex-direction: column; 

    @media (max-width: 1024px) {
        margin-right: 30px;
    }   
`;

const PRTabContainer = styled.div`
    max-width: 246px; 
    max-height: 48px; 
    display: flex; 
    flex-direction: row; 
    align-items: center; 
    margin: 12px 0px 12px 0px; 

    @media (max-width: 1024px) {
        display: none;
    }
`;

const PRTabLeft = styled.div`
    max-width: 48px; 
    max-height: 48px; 
    display: flex; 
    justify-content: center;
    margin-right: 20px; 
`; 

const PRTabText = styled.div`
    min-width: 200px; 
    max-height: 42px; 
    justify-content: center; 
    text-align: start;
    display: flex; 
    flex-direction: column; 
    h1 {
        font-size: 16px;
        font-weight: 600; 
        margin: 20px 0px -5px 0px; 
        color: #011F3B; 
    }
    p {
        font-size: 14px; 
        font-weight: 400; 
        color: #83919E; 
        margin-bottom: 20px; 
    }
`;

const PRTabRight = styled.div`
    max-width: 22px; 
    max-height: 22px; 
    display: flex; 
    margin-left: -35px; 
    margin-top: -25px;
    cursor: pointer; 
    transform: ${props=>props.enlarge ? "scale(1.3)" : "scale(1)"};
    transition: 0.3s; 
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
`;

const PRTab = () => {
    const[enlarge, setEnlarge] = useState(true)

    return (
        <Authenticate>
            <PRTabMain>

            <Link to="/MySession" style={{ textDecoration: 'none' }} ><PRText>Pending Requests 
                <DDIcon src="/DropdownIcon.png"/>
            </PRText></Link>

            <PRTabContainer>
            <PRTabLeft>
                <img src="/PencilIcon.png"></img>
            </PRTabLeft>
            <PRTabText>
                <h1>Machine Learning</h1>
                <p>Sandy Rivers</p>
            </PRTabText>
            <PRTabRight enlarge={enlarge === 1} onMouseEnter={() =>{
                setEnlarge(1);
            }} onMouseLeave={() =>{
                setEnlarge(!enlarge);
            }}> 
                <img src="/InformationIcon.png"></img>
            </PRTabRight>
            </PRTabContainer>

            <PRTabContainer>
            <PRTabLeft>
                <img src="/PencilIcon.png"></img>
            </PRTabLeft>
            <PRTabText>
                <h1>Data Structure</h1>
                <p>Sandy Rivers</p>
            </PRTabText>
            <PRTabRight enlarge={enlarge === 3} onMouseEnter={() =>{
                setEnlarge(3);
            }} onMouseLeave={() =>{
                setEnlarge(!enlarge);
            }}>
                <img src="/InformationIcon.png"></img>
            </PRTabRight>
            </PRTabContainer>

            </PRTabMain>   
        </Authenticate>

    )
}

PRTab.defaultProps = {
}

export default PRTab; 