import React, {useState, useEffect} from 'react'; 
import styled from "styled-components"
import ListLine from '../ListLine';

const ListContainer = styled.div`
`;

const Clickable = styled.a`
    margin: 15px 0px;
    cursor: pointer;

    &:hover {
        color: #018EA2;
    }
`;

const List = () => {

    return <ListContainer>    
        <Clickable>Account Settings</Clickable>
        <ListLine />      
        <Clickable>Edit Projects</Clickable>
        <ListLine />        
        <Clickable>Past Sessions</Clickable>
        <ListLine />        
        <Clickable>Payment Info</Clickable>
        <ListLine />  
        <Clickable>Help</Clickable>
    </ListContainer>
}

List.defaultProps = {
}

export default List; 