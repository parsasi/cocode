import React, {useState} from 'react';
import Calendar from '../../comps/Calendar'; 
import styled from 'styled-components'
import Button from '../../comps/Button';
import ModalBioComp from '../../comps/ModalBio';

const CalendarPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
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

export default function CalendarPage(props) {

    return(
        <CalendarPageContainer>
            <HeaderContainer>Book A Session</HeaderContainer>
            <ModalBioComp tutor={props.tutor} />
            <TextContainer>Choose a date and time that Angela is available:</TextContainer>
            <CalendarContainer>
                <Calendar />
            </CalendarContainer>
            <ButtonContainer>
                <Button text="Back" />
                <Button text="Next" />
            </ButtonContainer>
        </CalendarPageContainer> 
    )
}
