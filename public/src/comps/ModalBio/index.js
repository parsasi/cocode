import React, {useState, useEffect} from 'react'; 
import styled from "styled-components";

const ModalBioContainer = styled.div`
    padding: 10px;
    border-radius: 10px;
    margin-top: 40px;
    display: flex; 
    font-size: 25px; 
    align-items: center;
`;

const ProfileImg = styled.img`
    width: 175px;
    height: 200px;  
    margin: 10px;  
    object-fit: cover;
    border-radius: 50px 50px;
`;

const Name = styled.h2`
    margin-left: 20px;
`;

const ModalBioComp = (props) =>{

return <ModalBioContainer>
    <ProfileImg src={props.tutor.user.profilePhoto}/>
        <Name>{props.tutor.user.firstName} {props.tutor.user.lastName}</Name>
</ModalBioContainer>
}

ModalBioComp.defaultProps = {
name: "AngelaMiller",
img: "/angelamiller.jpg",
}

export default ModalBioComp; 