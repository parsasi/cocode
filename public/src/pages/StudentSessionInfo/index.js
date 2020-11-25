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

`;

export default function InfoPage() {
const HandleBoxClick = (str)=>{
        alert(str);
}

return <InfoPageContainer>
    <HeaderContainer>Book A Session</HeaderContainer>
    <ModalBioComp />
    <TopTextContainer>Please provide Angela with a brief description of what you need help with:</TopTextContainer>
    <InPut label="Description" ph="Type here" height="200px" width="500px"/>
    <BottomTextContainer>Choose one or more Languages to work on with Angela</BottomTextContainer>
    <LangTagsContainer>
        <LangTags text="JavaScript"/>
        <LangTags text="HTML"/>
        <LangTags text="CSS"/>
    </LangTagsContainer>
    <ButtonContainer>
        <Button text="Back" />
        <Button text="Next" />
    </ButtonContainer>
    </InfoPageContainer> 
}