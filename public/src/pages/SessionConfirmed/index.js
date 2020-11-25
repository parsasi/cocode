import React, {useState} from 'react';
import styled from "styled-components";
import Sidebar from '../../comps/Sidebar';
import RightSidebar from '../../comps/RightSidebar';
import SessionRequest from '../../comps/SessionRequest';
import Button from '../../comps/Button';

const SessionConfirmedPage = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  background: #F5F5FB;
`;

const Content = styled.div`
  width: 60vw;
  margin-left: 300px;
  margin-right: 300px;
  display: flex;
  flex-direction: column;
  text-align: start;
`;

const Strong = styled.strong`
    padding-right: 10px;
`;

const Message = styled.div`
    padding: 20px 0px;
`;

export default function SessionConfirmed() {
  const HandleBoxClick = (str)=>{
    alert(str);
  }

  return <SessionConfirmedPage className="home">
    <Sidebar />
    <Content>
        <h1>Session Requested</h1>
        <Message><Strong>Session confirmed!</Strong><br/>
        Payment will become available 24 hours after the session.</Message>
        <SessionRequest/>
        <Button text="Home" />
    </Content>
    <RightSidebar name="Alyssa Merlino"/>
  </SessionConfirmedPage>
}

SessionConfirmed.defaultProps = {

}