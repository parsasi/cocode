import React, {useState} from 'react';
import styled from "styled-components";
import Sidebar from '../../comps/Sidebar';
import EditProfPic from '../../comps/EditProfPic';
import AccountEdit from '../../comps/AccountEdit';
import RightSidebar from '../../comps/RightSidebar';

const MyAccountPage = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  background: #F5F5FB;
`;

const Content = styled.div`
  width: 50vw;
  margin-left: 350px;
  margin-right: 40px;
  flex-direction: column;
  padding: 50px;
`;

const ProfPicContainer = styled.div`
  position: relative;
  left: -100px;
`;

const NameComp = styled.h1`
  position: relative;
  margin: auto;
  transform: scale(1.2);
  top: -120px;
  left: 60%;
`;

export default function MyAccount({name}) {
  const HandleBoxClick = (str)=>{
    alert(str);
  }

  return <MyAccountPage className="home">
    <Sidebar />
    <Content>
      <ProfPicContainer>
        <EditProfPic />
        <NameComp>{name}</NameComp>
      </ProfPicContainer>
      <AccountEdit />
    </Content>
    <RightSidebar/>
  </MyAccountPage>
}

MyAccount.defaultProps = {
  name: "Adam Jameson"
}