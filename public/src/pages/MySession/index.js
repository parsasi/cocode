import React from 'react';
import styled from "styled-components";
import Sidebar from '../../comps/Sidebar';
import Session from '../../comps/Session';
import RightSidebar from '../../comps/RightSidebar';

const MysessionPage = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  align-items:flex-start;
  background: #F5F5FB;
`;

const SessionList = styled.div`
    width:60%;
    text-align:left;
    margin-left:25%;
    margin-top: 10vh;
`;

const Title = styled.div`
    font-size:24px;
    margin-bottom:20px;
`;

export default function MySession() {
    const HandleBoxClick = (str)=>{
      alert(str);
    }
  
    return <MysessionPage>
        <Sidebar />
        <SessionList>
          <Title>
            <b>My Sessions</b>
          </Title>
          <div>
            <Session />
            <Session />
            <Session />
            <Session />
          </div>
        </SessionList>
        <RightSidebar /> 
    </MysessionPage>
  }