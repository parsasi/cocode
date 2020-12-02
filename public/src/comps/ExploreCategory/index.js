import React, {useState} from 'react'; 
import styled from 'styled-components';
import {Link} from 'react-router-dom'; 


const ExploreCategoryContainer = styled.div`
    width:35%;
    height: 350px;
    border-radius: 10px;
    overflow:hidden;
    position:relative;
    margin-top:40px;
`

const ImageContainer = styled.div`
   width:100%;
   height:100%;
    img {
        min-width:100%;
        min-height:100%;
        cursor: pointer; 
    }
    user-select: none; 
    display: flex;
    position:absolute:
    top:0;
    left:0;
    z-index:-1;
`;

const ImageOverlay = styled.div`
    position:absolute;
    top:0;
    left:0;
    z-index:1;
    padding:30px 30px 30px 30px;
    height:calc(100% - 60px);
    width:calc(100% - 60px);
`

const BigTextContainer = styled.div`
    width: 100%;
    font-size: 24px; 
    font-weight: bold; 
    color: #FFFFFF; 
`;

const SmallTextContainer = styled.div`
    width:100%;
    font-size: 18px; 
    color: #FFFFFF; 
    opacity: 80%; 
    
    display: flex; 
    justify-content: space-bewteen; 
    word-spacing: 80px; 
`;

const IconContainer = styled.div`
    transition: 0.5s;
    width: 46px; 
    height: 46px; 
    position: absolute; 
    bottom: 30px;
    left:30px; 
    cursor: pointer; 
    &:hover {
        transform: scale(1.1);
    }
     
`; 



const ExploreCategory = (props) => {

return (
    <ExploreCategoryContainer>
        <Link to="/FindATutor">
            <ImageContainer>
                <img src={props.image} alt={props.text} />
            </ImageContainer>
            <ImageOverlay>
                <BigTextContainer>{props.text}</BigTextContainer>
                <SmallTextContainer>{props.students}⠀Students {props.tutors}⠀Tutors</SmallTextContainer>
                <IconContainer>
                    <img src="/FavouriteIcon.png" alt="Like This Category"></img>
                </IconContainer>
            </ImageOverlay>
        </Link>
    </ExploreCategoryContainer> 
    )
}

ExploreCategory.defaultProps = {
    text : '',
    tutors :  Math.floor(Math.random() * 100),
    students : Math.floor(Math.random() * 100),
    image : '/WebDevImage.png'
}

export default ExploreCategory; 