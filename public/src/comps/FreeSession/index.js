import React, {useState} from 'react'; 
import styled from 'styled-components'; 
import {Link} from 'react-router-dom';

const FSContainer = styled.div`
    max-width: 250px; 
    max-height: 200px; 
    display: flex;
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    background-color: #F5F5FB; 
    border-radius: 10px; 
`; 

const FSIcon = styled.div`
    max-width: 39px; 
    max-height: 39px; 
    padding: 25px; 
`;

const FSMiddle = styled.div`
    max-width: 232px; 
    max-height: 38px; 
    font-size: 20px; 
    font-weight: 400; 
    color: #8DA1B5; 
    padding: 0px 25px 25px 25px; 
`;

const FSButton = styled.div`
    max-width: 200px; 
    max-height: 49px; 
    background-color: #018EA2; 
    border-radius: 10px; 
    color: #FFFFFF;
    display: flex; 
    align-items: center;
    justify-content: center; 
    font-size: 18px; 
    font-weight: 600; 
    padding: 10px 20px 10px 20px;  
    margin-bottom: 27px; 
    cursor: pointer;
    transform: ${props=>props.enlarge ? "scale(1)" : "scale(1.1)"};
    transition: 0.4s; 

`;

const FSTab = () => { 
    const[enlarge, setEnlarge] = useState(true); 

    return <FSContainer>
        <FSIcon>
            <img src="/RibbonIcon.png"></img>
        </FSIcon>
        <FSMiddle>
            Struggling at school?
        </FSMiddle>
        <Link to="/FreeSession" style={{ textDecoration: 'none' }} ><FSButton enlarge={enlarge} onMouseEnter={() =>{
            setEnlarge(!enlarge); 
        }} onMouseLeave={() =>{
            setEnlarge(!enlarge);
        }}>
            Get a free session
        </FSButton></Link>
    </FSContainer>
}

FSTab.defaultProps = {

}

export default FSTab; 