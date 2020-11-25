import React, {useState, useEffect} from 'react'; 
import styled from "styled-components";
import Button from '../Button';
import LangTags from '../LangTags';
import BookModal from '../BookModal/BookModal';
import UserInfo from '../UserInfoSession';
import ProfTags from '../ProfTags'; 


const Container = styled.div`
    padding: 10px;
`;

const ProfileImg = styled.img`
    width: 250px;
    height: 300px;  
    object-fit: cover;
`;

const Intro = styled.div`
    font-size:16px;
    padding-left:20px;
`;

const Top = styled.div`
    display: flex;
    flex-direction: column;
`;

const Info = styled.div`
    display: flex;
`;

const LangBox = styled.div`
    margin-bottom: 50px;
`;

const Rate = styled.div`
    display:flex;
    align-items:center;
    margin-top:40%;
    img{
        width:220px;
        height:40px;
        margin-right:25%;;
    }
`;

const UserProfile = ({text, name, img}) => {
    const [open, setOpen] = useState(false)

    const openModal = () => {
        setOpen(true)
    }

    return <Container>
        <Top>
            <h2>
               {name}
            </h2>
            <Info>
                <ProfileImg src={img}/>
                <Intro>
                    <ProfTags text="Tutor"/>
                    <p>{text}</p>
                    <Rate>
                        <img src="/stars.png" />
                        <Button text="Book" openModal={openModal}/>
                    </Rate>
                </Intro>
            </Info>
        </Top>
        <LangBox>
            <LangTags text="ReactJS"/>
            <LangTags text="JavaScript"/>
            <LangTags text="Java"/>
        </LangBox>
        <UserInfo/>
        <BookModal open={open} setOpen={setOpen}>
            <h1>Book A Tutor</h1>
        </BookModal>
    </Container>
}

UserProfile.defaultProps = {
    name: "Jorge Canton",
    img: "/jorgecanton.jpg",
    text: "Jorge has been teaching students development for the past five years."
}

export default UserProfile; 