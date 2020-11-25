import React from 'react';
import styled from "styled-components";
import Sidebar from '../../comps/Sidebar';
import Rating from '../../comps/Rating';
import RightSidebar from '../../comps/RightSidebar';
import Button from '../../comps/Button';

const ReviewPage = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    background: #F5F5FB;
`;

const Content = styled.div`
    margin:auto;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    h1 {
      margin-bottom:50px;
    }
    textarea {
      border:none;
      background-color:#D6D6D6;
      margin-top: 10px;
    }
`;

export default function Review() {
    const HandleBoxClick = (str)=>{
      alert(str);
    }
    
  return <ReviewPage> 
        <Sidebar/>
        <Content>
          <h1>Rate Your Tutor</h1>
          <Rating />
          <p>What do you feel about the classes? Let us know your thoughts!</p>
          <p>Your feeback can be a big help to other students and your tutors.</p>
          <textarea id="review" name="review" rows="15" cols="85" maxlength="200" placeholder="Your comment...">
          </textarea>
          <Button text="Submit"/>
      </Content>
      <RightSidebar />
   </ReviewPage>
}