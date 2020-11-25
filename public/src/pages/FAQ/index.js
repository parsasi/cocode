import React, {useState} from 'react';
import styled from "styled-components";
import Sidebar from '../../comps/Sidebar';
import RightSidebar from '../../comps/RightSidebar';
import Accordion from '../../comps/Accordion';

const FAQPage = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    background: #F5F5FB;
  `;

const Content = styled.div`
    margin: auto;
    max-width: 40vw;
    height: 90vh;
    padding: 20px 40px 20px 40px;
    background-color: #FFFFFF;
    box-shadow: 5px 10px 10px #888888;
    border-radius: 30px;
    text-align: start;
`;

export default function FAQ() {
  const HandleBoxClick = (str)=>{
    alert(str);
  }

  return <FAQPage>
    <Sidebar />
    <Content>
        <h1>FAQs</h1>
        <h3>Students</h3>
        <Accordion 
        title="What happens if I cancel a lesson?"
        content="You may cancel before 24 hours prior in order to receive a full refund. Cancelling within 24 hours will result in a 20% cancellation fee."
        />
        <Accordion 
        title="How long will it take for the tutor to get back to me?"
        content="Most tutors respond within one business day but they can take up to three business days before the request expires."
        />
        <Accordion 
        title="How do I report someone?"
        content="Please use the Contact Us page to send us a message. Include the username of the person you'd like to report as well as a description of what happeneed."
        />
        <h3>Tutors</h3>
        <Accordion 
        title="How often will I get paid?"
        content="Payment is sent out weekly on Mondays at 00:00 GMT."
        />
        <Accordion 
        title="What happens if I'm late or miss a lesson?"
        content="If you miss a lesson your payment will be reversed and you will receive a strike on your account. If you are running late, please send a message to your student as soon as possible and offer to extend or refund all or part of the session."
        />
    </Content>
    <RightSidebar />
  </FAQPage>
}