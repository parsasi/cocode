import React from 'react';
import styled from "styled-components";
import Sidebar from '../../comps/Sidebar';
import RightSidebar from '../../comps/RightSidebar';
import Input from '../../comps/Form/Input';

const ContactUsPage = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    background: #F5F5FB;
`;

const Content = styled.div`
    max-width: 50vw;
    min-height: 85vh;
    margin: auto;
    margin-left: 270px;
    padding: 20px 40px 40px 40px;
    background-color: #FFFFFF;
    box-shadow: 5px 10px 10px #888888;
    border-radius: 30px;
    text-align: start;
    display: flex;
    flex-direction: column;
`;

const Submit = styled.input`
    width: 250px;
    height: 50px;
    border: none;
    background: #018EA2;
    color: white;
    align-self: center;
    margin-top: 15px;
    font-size: 12pt;
    cursor: pointer;
`;

const Text = styled.div``;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-left: -10px;
`;

export default function ContactUs() {
  const HandleBoxClick = (str)=>{
    alert(str);
  }

  return (
    <ContactUsPage>
      <Sidebar />
      <Content>
        <Text>
          <h1>Contact Us</h1>
          <h3>Have a question or comment? Feel free to reach out!</h3>
          <p>If you have any questions, comments, or concerns please use the contact form below to get in touch. You can also reach us at <a href="mailto:projectcocode@gmail.com">projectcocode@gmail.com</a>.</p>
        </Text>
        <Form>
          <Input label="Name *" type="text" ph="Name"/>
          <Input label="Email *" type="email" ph="Email"/>
          <Input label="Message *" type="text" ph="Message" height="150px"/>
          <Submit label="Submit" type="submit"/>
        </Form>
      </Content>
      <RightSidebar />
  </ContactUsPage>
  )
}