import React, {useState} from 'react';
import styled from 'styled-components'
import Button from '../../comps/Button';
import ModalBioComp from '../../comps/ModalBio';
import InPut from '../../comps/Form/Input';
import LangTags from '../../comps/LangTags'; 
import PaymentForm from '../../comps/Form/Payment';
import ListLine from '../../comps/ListLine';

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
    max-width: 500px; 
`;

const LangTagsContainer = styled.div`
    display: flex; 
    align-items: center;
    margin-bottom: 20px; 
`;

const DateText = styled.div`
    margin-bottom: 20px; 
    margin-top: 50px;
`;

const TimeText= styled.div`
    margin-bottom: 20px; 
`;

const WroteText = styled.div`
    margin-bottom: 40px;
`;

const TotalText = styled.div`
    margin-top: 40px; 
`;

export default function PaymentPage() {
const HandleBoxClick = (str)=>{
        alert(str);
}

return <InfoPageContainer>
    <HeaderContainer>Book A Session</HeaderContainer>
    <ModalBioComp />
    <TopTextContainer>If Alyssa accepts your request you will be notified and charged the full amount. You may cancel before 24 hours prior in order to receive a full refund. Cancelling within 24 hours will result in a 20% cancellation fee.</TopTextContainer>
    <PaymentForm />
    <DateText><b>Date:</b>   December 10th, 2020</DateText>
    <TimeText><b>Time:</b>   10:00AM - 11:00AM</TimeText>
    <LangTagsContainer>
        <b>You Selected:</b>
        <LangTags text="JavaScript"/>
    </LangTagsContainer>
    <WroteText><b>You Wrote:</b> "I am trying to understand for loops in Javascript"</WroteText>
    <ListLine />
    <TotalText><b>Total Due:</b> $20.00 (1 hour x $20.00)</TotalText>
    <ButtonContainer>
        <Button text="Back" />
        <Button text="Finish" />
    </ButtonContainer>
    </InfoPageContainer> 
}