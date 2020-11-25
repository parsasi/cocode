import React, {useState, useEffect} from 'react'; 
import styled from "styled-components"
import LangTags from '../../comps/LangTags';

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

const SessionRequest = ({name, img, date, time, description, pay, hours, rate}) => {

    return <SessionRequestContainer>    
        <UserComp>
            <ImgComp src={img}/>
            <NameComp>{name}</NameComp>
        </UserComp>
        <InfoComp>
            <Date><Strong>Date:</Strong> {date}</Date>
            <Time><Strong>Time:</Strong> {time}</Time>
            <Lang><Strong>He selected:</Strong> <LangTags text="Python"/><LangTags text="C++"/></Lang>
            <Desc><Strong>He wrote:</Strong> "{description}"</Desc>
            <Pay><Strong>Total Pay:</Strong> <Total><div>{pay}</div> <div>({hours} x {rate})</div></Total></Pay>
        </InfoComp>
    </SessionRequestContainer>
}

SessionRequest.defaultProps = {
    name: "Adam Jameson",
    img: "/guy.jpg",
    date: "Month Day, Year",
    time: "00:00 - 00:00",
    description: "Information about session.",
    pay: "$20.00",
    hours: "1 hour",
    rate: "$20.00"
}

export default SessionRequest; 