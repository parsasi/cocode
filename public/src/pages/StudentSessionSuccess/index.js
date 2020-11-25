import React, {useState, useEffect} from 'react'; 
import styled from "styled-components"
import LangTags from '../../comps/LangTags';
import Button from '../../comps/Button';

const SessionRequestContainer = styled.div`
`;

const UserComp = styled.div`
    display: flex;
    align-items: center;
`;

const ImgComp = styled.img`
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;    
    object-fit: cover;
    border-radius: 150px;
`;

const NameComp = styled.h2`
    padding-left: 20px;
`;

const InfoComp = styled.div`   
    padding: 30px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Date = styled.div``;

const Time = styled.div``;

const Lang = styled.div``;

const Desc = styled.div``;

const Pay = styled.div`
    display: flex;
`;

const Total = styled.div`
    display: flex;
    flex-direction: column;
`;

const Strong = styled.strong`
    padding-right: 10px;
`;

const HeaderContainer = styled.h1`
    margin-bottom: 15px;
`;

const TopText = styled.div`
margin-top: 25px;
`;

const StudentSessionSuccess = ({name, img, date, time, description, pay, hours, rate}) => {

    return <SessionRequestContainer>    
          <HeaderContainer>Book A Session</HeaderContainer>
        <UserComp>
            <ImgComp src={img="angelamiller.jpg"}/>
            <NameComp>{name = "Angela Miller"}</NameComp>
        </UserComp>
        <TopText>Congratulations! Your payment was <strong>successful!</strong></TopText>
        <InfoComp>
            <Date><Strong>Date:</Strong> {date = "December 10th, 2020"}</Date>
            <Time><Strong>Time:</Strong> {time = "10:00AM - 11:00AM"}</Time>
            <Lang><Strong>You selected:</Strong> <LangTags text="JavaScript"/></Lang>
            <Desc><Strong>He wrote:</Strong> "{description = "'I am trying to understand for loops in Javascript'" }</Desc>
            <Pay><Strong>Total Pay:</Strong> <Total><div>{pay}</div> <div>({hours} x {rate})</div></Total></Pay>
        </InfoComp>
        <Button text="Home" />
    </SessionRequestContainer>
}

StudentSessionSuccess.defaultProps = {
    name: "Angela Miller",
    img: "/angelamiller.jpg",
    date: "Month Day, Year",
    time: "00:00 - 00:00",
    description: "Information about session.",
    pay: "$20.00",
    hours: "1 hour",
    rate: "$20.00"
}

export default StudentSessionSuccess; 