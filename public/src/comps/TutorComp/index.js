import React, {useState} from 'react'; 
import styled from "styled-components";
import Button from '../Button';
import LangTags from '../LangTags';
import BookModal from '../BookModal/BookModal'
import {Link} from 'react-router-dom'; 
import CalendarPage from '../../pages/StudentSessionRequested';


const ButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 150px;
    justify-content: center;
`;

const LangBox = styled.div``;

const TutorCompContainer = styled.div`
    padding: 10px;
    border-radius: 10px;
    background: white;
    box-shadow: 5px 5px 5px #888888;
    margin-top: 40px;
`;

const ProfileImg = styled.img`
    width: 175px;
    height: 200px;  
    margin: 10px;  
    object-fit: cover;
`;

const Name = styled.h2``;

const Blurb = styled.div``;

const Top = styled.div`
    display: flex;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
`;

const TutorComp = ({text, name, img}) => {
    const [open, setOpen] = useState(false)

    const openModal = () => {
        setOpen(true)
    }

    return <TutorCompContainer>
        <Top>
            <ProfileImg src={img}/>
            <Info>
                <Name>{name}</Name>
                <Blurb>{text}</Blurb>
            </Info>
            <ButtonBox>
                <Link to="/TutorProfile" style={{ textDecoration: 'none' }} >
                    <Button text="Profile"/>
                </Link>
                <Button text="Book" onClick={openModal}/>
            </ButtonBox>
        </Top>
        <LangBox>
            <LangTags text="ReactJS"/>
            <LangTags text="JavaScript"/>
            <LangTags text="Java"/>
        </LangBox>
        <BookModal open={open} setOpen={setOpen}>
            <CalendarPage />
        </BookModal>
    </TutorCompContainer>
}

TutorComp.defaultProps = {
    name: "Jorge Canton",
    img: "/jorgecanton.jpg",
    text: "Jorge has been teaching students development for the past five years."
}

export default TutorComp; 