import React, {useState, useEffect} from 'react'; 
import styled from "styled-components"

const ListLineContainer = styled.div`    
    max-width: 150px; 
    max-height: 100px;
`;

const Line = styled.hr`
    border: 1px solid black;
    margin-bottom: 20px;
`;

const ListLine = () => {

    return <ListLineContainer>
        <Line />
    </ListLineContainer>
}

ListLine.defaultProps = {
    width: "150px" 
}

export default ListLine; 