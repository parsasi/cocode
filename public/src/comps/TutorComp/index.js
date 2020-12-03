import React, {useState} from 'react'; 
import styled from "styled-components";
import Button from '../Button';
import LangTags from '../LangTags';
import BookModal from '../BookModal/BookModal'
import {Link} from 'react-router-dom'; 
import CalendarPage from '../../pages/StudentSessionRequested';
const LangBox = styled.div``;

const TutorCompContainer = styled.div`
    padding: 10px;
    border-radius: 10px;
    background: white;
    box-shadow: 5px 5px 5px #888888;
    margin-top: 40px;
`;

const ProfileImg = styled.img`
    width: 200px;
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
    width:calc(100% - 300px);
`;


const ButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    width:100px;
    justify-content: center;
`;

const TutorComp = ({tutor , ...props}) => {
    const [open, setOpen] = useState(false)

    const openModal = () => {
        setOpen(true)
    }

    return (
        <TutorCompContainer>
            <Top>
                <ProfileImg src={tutor.user.profilePhoto}/>
                <Info>
                    <Name>{tutor.user.firstName}  {tutor.user.lastName}</Name>
                    <Blurb>{tutor.bioText}</Blurb>
                </Info>
                <ButtonBox>
                    <Link to="/TutorProfile" style={{ textDecoration: 'none' }} >
                        <Button text="Profile"/>
                    </Link>
                    <Button text="Book" onClick={openModal}/>
                </ButtonBox>
            </Top>
            <LangBox>
                {
                    tutor.categories.map(item => <LangTags text={item.text} />)
                }
            </LangBox>
            <BookModal open={open} setOpen={setOpen}>
                <CalendarPage tutor={tutor} />
            </BookModal>
        </TutorCompContainer>
    )
}

TutorComp.defaultProps = {
    name: "Jorge Canton",
    img: "/jorgecanton.jpg",
    text: "Jorge has been teaching students development for the past five years."
}

export default TutorComp; 