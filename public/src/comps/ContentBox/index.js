import React, {useState, useEffect} from 'react'; 
import styled from "styled-components";

const ContentBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 45vw;
    min-height: 90vh; 
    margin: 10px 10px 10px 300px;
    padding: 10px 10px 10px 50px;
    background-color: #FFFFFF;
    box-shadow: 5px 10px 10px #888888;
    border-radius: 30px;
    z-index: 0;

    @media (max-width: 1024px) {
        margin: 23vh 5vw 3vh 5vw;
        width: 90%;
    }
`;

const ContentBox = ({children}) => {

    return <ContentBoxContainer>
        {children}
    </ContentBoxContainer>
}

ContentBox.defaultProps = {
}

export default ContentBox; 