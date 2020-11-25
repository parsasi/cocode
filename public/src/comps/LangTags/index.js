import React, {useState, useEffect} from 'react'; 
import styled from "styled-components";

const LangTagsContainer = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-width: 100px; 
    max-height: 10px; 
    background-color: #173F5F;
    border-radius: 10px;
    padding: 5px 10px;
    margin: 5px;
    color: white;
    user-select: none; 
`;

const LangTags = ({text, select}) => {

    return <LangTagsContainer> 
        {text}
    </LangTagsContainer>
}

LangTags.defaultProps = {
    text: "JavaScript",
    select: true
}

export default LangTags; 