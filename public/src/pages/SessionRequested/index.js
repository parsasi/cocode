import React, {useState} from 'react';
import styled from "styled-components";
import Sidebar from '../../comps/Sidebar';
import RightSidebar from '../../comps/RightSidebar';
import SessionRequest from '../../comps/SessionRequest';
import Button from '../../comps/Button';

const SessionRequestedPage = styled.div`
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

const Buttons = styled.div`
  display: flex;
`;

export default function SessionRequested() {
  const HandleBoxClick = (str)=>{
    alert(str);
  }

  return <SessionRequestedPage className="home">
    <Sidebar />
    <Content>
        <h1>Session Requested</h1>
        <SessionRequest />
        <Buttons>
          <Button text="Confirm" />
          <Button text="Deny" />
        </Buttons>
    </Content>
    <RightSidebar name="Alyssa Merlino"/>
  </SessionRequestedPage>
}

SessionRequested.defaultProps = {
  
}