import React, {useState} from 'react'; 
import styled from 'styled-components';

const ImageContainer = styled.div`
    max-width: 801px; 
    min-height: 408px;
    img {
        border-radius: 10px; 
        max-height: 350px;
        max-width: 351px; 
        transform-origin: center;
        cursor: pointer; 
        margin-right: 100px; 
        margin-top: 60px;  
    }
    user-select: none; 
    display: flex; 
    margin-left: 0px;
`;

const BigTextContainer = styled.div`
    max-width: 383px; 
    max-height: 37px; 
    font-size: 24px; 
    font-weight: bold; 
    color: #FFFFFF; 
    position: absolute; 
    top: 0; 
    margin-top: 560px; 
    margin-left: 35px; 
`;

const SmallTextContainer = styled.div`
    max-width: 383px; 
    max-height: 36px; 
    font-size: 18px; 
    color: #FFFFFF; 
    opacity: 80%; 
    position: absolute;
    top: 0; 
    margin-top: 595px; 
    margin-left: 36px; 
    display: flex; 
    justify-content: space-bewteen; 
    word-spacing: 80px; 
`;

const IconContainer = styled.div`
    transform: ${props=>props.hovered ? "scale(1)" : "scale(1.1)"};
    transition: 0.5s;
    max-width: 46px; 
    max-height: 46px; 
    position: absolute; 
    top: 0; 
    margin-top: 735px; 
    margin-left: 35px; 
    cursor: pointer; 
     
`; 

const ExploreCSS = () => {
    const[hovered, setHovered] = useState(true); 

return  <ImageContainer>
        <img src="/CSSImage.png"></img>
        <BigTextContainer>CSS</BigTextContainer>
        <SmallTextContainer>2250⠀Students 38⠀Tutors</SmallTextContainer>
        <IconContainer hovered={hovered} onMouseEnter={() =>{
    setHovered(!hovered);
}} onMouseLeave={() =>{
    setHovered(!hovered);
}}>
            <img src="/FavouriteIcon.png"></img>
        </IconContainer>
    </ImageContainer>
}

ExploreCSS.defaultProps = {

}

export default ExploreCSS; 