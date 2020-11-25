import React from 'react';
import styled from "styled-components";
import Sidebar from '../../comps/Sidebar';

const ReceivedMsgPage = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    background: #F5F5FB;
`;

const Content = styled.div`
    margin: auto;
    padding: 100px;
    background-color: #FFFFFF;
    box-shadow: 5px 10px 10px #888888;
    border-radius: 30px;
    text-align: start;
    div{
        display:flex;
        flex-direction:column;
        align-items:center;
        padding-bottom:50px;
        h1{
            color:#018EA2;
        }
        span{
            color:#173F5F;
            font-size:16px;
            text-decoration: underline;
            cursor:pointer;
        }
        p {
            margin:5px;
            font-size:18px;
        }
    }
`;

export default function MsgReceived() {
  const HandleBoxClick = (str)=>{
    alert(str);
  }

  return <ReceivedMsgPage>
      <Sidebar />
      <Content>
          <div>
            <h1>Your Application Has Been Received!</h1>
            <p>We will contact you soon as we are processing your application</p>
          </div>
          <div>
            <p>For more information or questions</p>
            <p>Please contact us at <span>cocode.code@email.com</span> or visit <span>FAQ</span></p>
          </div>
      </Content>
  </ReceivedMsgPage>
}