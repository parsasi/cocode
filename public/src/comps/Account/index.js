import React, {useState} from 'react' 
import styled from 'styled-components'
import DDIcon from '../../public/DropdownIcon.png'
import {Link} from 'react-router-dom'
import { useToken } from '../../hooks/useToken'
import { useUser } from '../../hooks/useUser'
import { useHistory } from 'react-router-dom'

const AccountBoxMain = styled.div`
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    @media (max-width: 1024px) {
        margin-right: 20px;
    }   
`;

const AccountBoxContainer = styled.div`
    max-width: 300px; 
    max-height: 56px; 
    font-size: 24px; 
    font-weight: 400; 
    color: #011F3B; 
    display: flex; 
    margin-left: -10px;
    cursor: pointer;
`; 

const Name = styled.h5`
    align-self: center;
    padding: 0px 10px;
`;

const ExpandContainer = styled.div`
    min-width: 250px; 
    min-height: 56px; 
    background-color: #FFFFFF;
    font-size: 16px; 
    margin-top: 10px; 
    z-index: 1;
    display:${props=>props.expanded ? "flex" : "none"};  
    flex-direction: column; 
    align-items: center; 
    position: fixed;
    border: 1px solid #EAEAEA; 
    box-sizing: border-box; 
    box-shadow: 5px 0px 18px rgba(0, 0, 0, 0, 0.08);
    cursor: pointer; 
    margin-left: -10px;
    a {
        margin: 10px 0; 
    }
`; 

const UserImg = styled.img`
    height: 60px;
    width: 60px;
    align-self: center;
    object-fit: cover;
    border-radius: 150px;
`;

const RotateImg = styled.img`
    transform:${props=>props.expanded ? "rotate(270deg)" : "rotate(360deg)"};
    transition: 0.5s;
    margin-bottom: -10px; 
`;

const AccountBox = (props) => {
    const[expanded, setExpanded] = useState(false)

    const [,setToken] = useToken()
    const [,setUser] = useUser()
    const history = useHistory();



    const logoutHandler = (e) => {
        e.preventDefault()
        setToken('')
        setUser({})
        history.push('/')
    }

    return <AccountBoxMain>
    <AccountBoxContainer onClick={()=>{
            setExpanded(!expanded);
        }}>
        <UserImg src={props.user.profilePhoto}/>
        <Name>{props.user.firstName} {props.user.lastName}</Name>
        <div><RotateImg expanded={!expanded} src={DDIcon} /></div> 
    </AccountBoxContainer>
    <ExpandContainer expanded={expanded}>
        <Link to="/MyAccount" style={{ textDecoration: 'none' }} ><a>My Account</a></Link>
        <Link to="/EditAccount" style={{ textDecoration: 'none' }} ><a>Account Settings</a></Link>
        <Link to="/MySession" style={{ textDecoration: 'none' }} ><a>My Sessions</a></Link>
        <Link to="/" style={{ textDecoration: 'none' }} ><a onClick={logoutHandler}>Log Out</a></Link>
    </ExpandContainer>
</AccountBoxMain>
}

AccountBox.defaultProps = {
    name: "Adam Jameson",
    img: "/adamjameson.jpg"
}

export default AccountBox; 