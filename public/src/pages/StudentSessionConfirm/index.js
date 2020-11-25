import React, {useState} from 'react';
import styled from 'styled-components'
import Button from '../../comps/Button';
import ModalBioComp from '../../comps/ModalBio';
import InPut from '../../comps/Form/Input';
import LangTags from '../../comps/LangTags'; 

const InfoPageContainer = styled.div`
    min-width: 80vw;
    min-height: 90vh;
    display: flex;
    flex-direction: column; 
    background: #F5F5FB;
    img {
        max-width: 150px;
        max-height: 150px;
    }
`;

const HeaderContainer = styled.h1`
    margin-bottom: -5px;
`;

const ButtonContainer = styled.div`
    margin-top: 60px; 
`;

const TopTextContainer = styled.p`
    margin-top: 40px;
    margin-bottom: 30px;
`;

const BottomTextContainer = styled.p`
    margin-top: 30px; 
`;

const LangTagsContainer = styled.div`
    display: flex; 
    align-items: center;
    margin-bottom: 20px; 
`;

const DateText = styled.div`
    margin-bottom: 20px; 
`;

const TimeText= styled.div`
    margin-bottom: 20px; 
`;

const WroteText = styled.div`

`;

export default function ConfirmPage() {
const HandleBoxClick = (str)=>{
        alert(str);
}

return <InfoPageContainer>
    <HeaderContainer>Book A Session</HeaderContainer>
    <ModalBioComp />
    <TopTextContainer>Please confirm that all information below is correct before proceeding:</TopTextContainer>
    <DateText><b>Date:</b>   December 10th, 2020</DateText>
    <TimeText><b>Time:</b>   10:00AM - 11:00AM</TimeText>
    <LangTagsContainer>
        <b>You Selected:</b>
        <LangTags text="JavaScript"/>
    </LangTagsContainer>
    <WroteText><b>You Wrote:</b> "I am trying to understand for loops in Javascript"</WroteText>
    <ButtonContainer>
        <Button text="Back" />
        <Button text="Payment" />
    </ButtonContainer>
    </InfoPageContainer> 
}