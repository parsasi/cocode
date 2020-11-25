import React, {useState} from 'react';
import styled from "styled-components";
import Sidebar from '../../comps/Sidebar';
import RightSidebar from '../../comps/RightSidebar';
import Title from '../../comps/Title';
import Input from '../../comps/Form/Input';
import Button from '../../comps/Button';

const FreeSessionPage = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    // margin: 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    background: #F5F5FB;
`;

const Content = styled.div`
    overflow: auto;
    height: 90vh;
    padding: 20px 40px 20px 30px;
    background-color: #FFFFFF;
    box-shadow: 5px 10px 10px #888888;
    border-radius: 30px;
    text-align: start;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Center = styled.div`
    margin: auto;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-self: start;
    max-width: 56%;
    margin-left: 280px;
`;

const Text = styled.div`
    margin: 30px 0px 30px 0px;
`;

export default function FreeSession() {
    const HandleBoxClick = (str)=>{
      alert(str);
    }
  
    return <FreeSessionPage>
        <Sidebar />
        <Center>
            <Title title="Get a Free Session"/>
            <Content>
                <Text>Please fill out the short form in order to receive a free 30 minute session.</Text>
                <Input label="Full Name" height="30px" fontSize="11pt" fontWeight="600" ph="Full Name"/>  
                <Input label="School Email" height="30px" fontSize="11pt" fontWeight="600" ph="School Email"/> 
                <Input label="What languages/programs are you using?" height="30px" fontSize="11pt" fontWeight="600" ph="Languages/Programs"/>
                <Button text="Submit"/>
                <Text>By clicking submit you agree to receive regular email updates from CoCode's news subscription. You will receive a redemption code in an email shortly. The code can be used to waive the fee of a 30 minute session with any tutor. </Text>
            </Content>
        </Center>
        <RightSidebar />
    </FreeSessionPage>
  }