import React, {useState} from 'react';
import Calendar from '../../comps/Calendar'; 
import styled from 'styled-components'
import Button from '../../comps/Button';
import ModalBioComp from '../../comps/ModalBio';

const CalendarPageContainer = styled.div`
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

const CalendarContainer = styled.div`

`;

const HeaderContainer = styled.h1`

`;

const TextContainer = styled.p`

`;

const ButtonContainer = styled.div`

`;

export default function CalendarPage() {
    const HandleBoxClick = (str)=>{
      alert(str);
    }

return <CalendarPageContainer>
    <HeaderContainer>Book A Session</HeaderContainer>
    <ModalBioComp />
    <TextContainer>Choose a date and time that Angela is available:</TextContainer>
    <CalendarContainer>
        <Calendar />
    </CalendarContainer>
    <ButtonContainer>
        <Button text="Back" />
        <Button text="Next" />
    </ButtonContainer>
</CalendarPageContainer> 
}
