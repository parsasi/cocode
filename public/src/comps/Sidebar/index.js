import React, {useState} from 'react'; 
import styled from 'styled-components';
import './Sidebar.css'
import Search from '../../comps/Search'; 
import {
    BrowserRouter as Router, 
    NavLink,
    Link
  } from "react-router-dom";

const SidebarContainer = styled.div`
    padding: 25px 25px 0px 25px;
    width: 200px;
    height: 100vh;
    background-color: #FFFFFF; 
    display: flex; 
    flex-direction: column; 
    align-items: center;
    position: fixed;
    z-index: 5;
    img {
        margin-right: 20px; 
    }

    @media (max-width: 1024px) {
        width: 100vw;
        height: 10vh;
        flex-direction: row;

        p{
            display: none;
        }
    }
`;

const ContentCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1024px) {
        width: 100vw;
        height: 10vh;
        flex-direction: row;
        justify-content: space-between;
    }
`;

const LogoContainer = styled.div`
    transform: ${props=>props.hovered ? "scale(1)" : "scale(1.1)"};
    transition: 0.5s;
    min-width: 175px; 
    min-height: 84px;  
    cursor: pointer;
    padding-left: 15px;

    @media (max-width: 1024px) {
        padding-left: 0;
        margin-bottom: 15px;
    }
`; 

const ProfileContainer = styled.div`
    max-width: 130px; 
    max-height: 20px; 
    display: inline-flex; 
    align-items: center; 
    margin-top: 60px; 
    font-weight: ${props=>props.clicked ? 'bold' : 'none'}; 
    color: ${props=>props.clicked ?  "#173F5F" : "#8DA1B5"}; 
    cursor: pointer;
    user-select: none; 

    @media (max-width: 1024px) {
        margin: 0px;
        margin-left: 10px;
        margin-bottom: 70px;
    }
`;

const ExploreContainer = styled.div`
    max-width: 130px; 
    max-height: 20px; 
    display: inline-flex; 
    align-items: center; 
    margin-top: 40px; 
    font-weight: ${props=>props.clicked ? 'bold' : 'none'}; 
    color: ${props=>props.clicked ?  "#173F5F" : "#8DA1B5"}; 
    cursor: pointer;
    user-select: none;

    @media (max-width: 1024px) {
        margin: 0px;
        margin-bottom: 70px;
    }
`;

const HistoryContainer = styled.div`
    max-width: 130px; 
    max-height: 20px; 
    display: inline-flex; 
    align-items: center; 
    margin-top: 40px; 
    font-weight: ${props=>props.clicked ? 'bold' : 'none'}; 
    color: ${props=>props.clicked ?  "#173F5F" : "#8DA1B5"}; 
    cursor: pointer;
    user-select: none;

    @media (max-width: 1024px) {
        margin: 0px;
        margin-bottom: 70px;
    }
`;

const TopTutorsContainer = styled.div`
    max-width: 150px; 
    max-height: 20px; 
    display: inline-flex; 
    align-items: center; 
    margin-top: 40px; 
    font-weight: ${props=>props.clicked ? 'bold' : 'none'}; 
    color: ${props=>props.clicked ?  "#173F5F" : "#8DA1B5"}; 
    cursor: pointer;
    user-select: none;

    @media (max-width: 1024px) {
        margin: 0px;
        margin-bottom: 70px;
    }
`;

const SupportContainer = styled.div`
    max-width: 130px; 
    max-height: 20px; 
    display: inline-flex; 
    align-items: center; 
    margin-top: 40px; 
    font-weight: ${props=>props.clicked ? 'bold' : 'none'}; 
    color: ${props=>props.clicked ?  "#173F5F" : "#8DA1B5"}; 
    cursor: pointer;
    user-select: none;

    @media (max-width: 1024px) {
        margin: 0px;
        margin-bottom: 70px;
    }
`;

const SettingsContainer = styled.div`
    max-width: 130px; 
    max-height: 20px; 
    display: inline-flex; 
    align-items: center; 
    margin-top: 40px; 
    font-weight: ${props=>props.clicked ? 'bold' : 'none'}; 
    color: ${props=>props.clicked ?  "#173F5F" : "#8DA1B5"}; 
    cursor: pointer;
    user-select: none;
    margin-bottom: 60px;

    @media (max-width: 1024px) {
        margin: 0px;
        margin-bottom: 70px;
    }
`;

const BecomeTutorContainer = styled.div`
    transform: ${props=>props.hoveredtwo ? "scale(1)" : "scale(1.1)"};
    transition: 0.5s; 
    min-width: 192px; 
    min-height: 48px; 
    background-color: #173F5F;
    color: #FFFFFF; 
    border-radius: 10px; 
    font-size: 14px; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    line-height; 17px; 
    cursor: pointer;
    user-select: none;

    @media (max-width: 1024px) {
        display: none;
    }
`;

const Sidebar = () => {
    const[hovered, setHovered] = useState(true); 
    const[hoveredtwo, setHoveredtwo] = useState(true); 


    return <SidebarContainer> 
        <ContentCont>
        <Link to ='/Explore' style={{ textDecoration: 'none' }} >
            <LogoContainer hovered={hovered} onMouseEnter={() =>{
                setHovered(!hovered);
            }} onMouseLeave={() =>{
                setHovered(!hovered); 
            }}> 
                <img src="/logo.svg"></img>
            </LogoContainer>
        </Link>
            <ProfileContainer>
              <NavLink to ="/MyAccount"className="navlink" activeClassName="selected">
                  <img src="/ProfileIcon.png"></img>
                  Profile 
              </NavLink>
            </ProfileContainer>
            <ExploreContainer>
              <NavLink to ="/Explore" className="navlink" activeClassName="selected">
                  <img src="/ExploreIcon.png"></img>
                  Explore 
              </NavLink>
            </ExploreContainer>
            <HistoryContainer>
              <NavLink to ="/MySession" className="navlink" activeClassName="selected">
                  <img src="/HistoryIcon.png"></img>
                  Sessions 
              </NavLink>
            </HistoryContainer>
            <TopTutorsContainer>
              <NavLink to="/FindATutor" className="navlink" activeClassName="selected">
                  <img src="/TopTutorsIcon.png"></img>
                   Tutors 
              </NavLink>
            </TopTutorsContainer>
            <SupportContainer>
              <NavLink to="/FAQ" className="navlink" activeClassName="selected">
                  <img src="/SupportIcon.png"></img>
                  Support
              </NavLink>
            </SupportContainer>
            <SettingsContainer>
              <NavLink to="/EditAccount" className="navlink" activeClassName="selected">
                  <img src="/SettingsIcon.png"></img>
                  Settings
              </NavLink>
            </SettingsContainer>
        <Link to ="/BecomeATutor" style={{ textDecoration: 'none' }} >
            <BecomeTutorContainer hoveredtwo={hoveredtwo} onMouseEnter={() =>{
                setHoveredtwo(!hoveredtwo);
            }} onMouseLeave={() =>{
                setHoveredtwo(!hoveredtwo); 
            }}> 
                Become A Tutor 
            </BecomeTutorContainer>
        </Link>
        <Search class="headersearch"/>
        </ContentCont>
  </SidebarContainer>
}

Sidebar.defaultProps = {
}

export default Sidebar; 