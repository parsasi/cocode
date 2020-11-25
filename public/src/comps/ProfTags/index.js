import React, {useState} from 'react'; 
import styled from "styled-components"

const ProfTagsContainer = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-width: 100px; 
    max-height: 10px; 
    background-color: #790F01;
    border-radius: 10px;
    padding: 5px 10px;
    color: white;
`;

const ProfTags = ({text, select}) => {

    return <ProfTagsContainer> 
        {text}
    </ProfTagsContainer>
}

ProfTags.defaultProps = {
    text: "Student"
}

export default ProfTags; 