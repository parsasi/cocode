import React, {useState} from 'react';
import styled from "styled-components";
import Sidebar from '../../comps/Sidebar';
import RightSidebar from '../../comps/RightSidebar';
import Input from '../../comps/Form/Input';
import ListLine from '../../comps/ListLine';
import Button from '../../comps/Button';
import Title from '../../comps/Title';
import ContentBox from '../../comps/ContentBox';
import {Link} from 'react-router-dom';

const EditAccountPage = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    background: #F5F5FB;    
    h1 {
        font-family: "Secular One", serif;
        font-weight: 500;
    }
`;

const Content = styled.div`
`;

const Center = styled.div`
    margin: auto;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
`;

const ButtonAlign = styled.div`
    display: flex;
    justify-content: center;
    margin-left: -10px;
`;

const CardInfo = styled.div`
    display: flex;
`;

export default function EditAccount() {
  const HandleBoxClick = (str)=>{
    alert(str);
  }

return <EditAccountPage>
    <Sidebar />
    <ContentBox>
        <Title title="Edit Account"/>
        <Content>
            <Input label="Full Name" height="30px" fontSize="11pt" fontWeight="600" ph="Full Name"/>
            <Input label="Username" height="30px" fontSize="11pt" fontWeight="600" ph="Username"/>
            <Input label="Email Address" height="30px" fontSize="11pt" fontWeight="600" ph="Email Address"/>
            <Input label="School" height="30px" fontSize="11pt" fontWeight="600" ph="School"/>
            <ListLine/>
            <Input label="Current Password" height="30px" fontSize="11pt" fontWeight="600" ph="********"/>
            <Input label="New Password" height="30px" fontSize="11pt" fontWeight="600" ph=""/>
            <Input label="Repeat New Password" height="30px" fontSize="11pt" fontWeight="600" ph=""/>
            <ListLine/>
            <Input label="Card Number" height="30px" fontSize="11pt" fontWeight="600" ph="1234 5678..."/>
            <CardInfo>
                <Input label="Expiration Date" height="30px" width="200px" fontSize="11pt" fontWeight="600" ph="MM/YY"/>
                <Input label="CVV" height="30px" width="100px" fontSize="11pt" fontWeight="600" ph="CVV"/>        
            </CardInfo>
            <Input label="Address 1" height="30px" fontSize="11pt" fontWeight="600" ph="Address 1"/>
            <Input label="Address 2" height="30px" fontSize="11pt" fontWeight="600" ph="Address 2"/>
            <Input label="City" height="30px" fontSize="11pt" fontWeight="600" ph="City"/>
            <Input label="Province" height="30px" fontSize="11pt" fontWeight="600" ph="Province"/>
            <Input label="Postal Code" height="30px" fontSize="11pt" fontWeight="600" ph="Postal Code"/>
            <ButtonAlign>
                <Link to="/MyAccount" style={{ textDecoration: 'none' }} ><Button text="Back to Account"/></Link>
                <Button text="Save Changes"/>
            </ButtonAlign>  
        </Content>
    </ContentBox>
    <RightSidebar/>
    </EditAccountPage>
}

EditAccount.defaultProps = {
}