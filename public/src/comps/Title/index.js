import React, {useState, useEffect} from 'react'; 
import styled from "styled-components"

const TitleContainer = styled.div`    
    max-width: 500px; 
    max-height: 100px;
`;

const TheTitle = styled.h1`
    margin-bottom: 20px;
`;

const Title = ({title}) => {

    return <TitleContainer>
        <TheTitle>{title}</TheTitle>
    </TitleContainer>
}

Title.defaultProps = {
    title: "Title"
}

export default Title; 