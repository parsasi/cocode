import React, {useState} from 'react';
import styled from "styled-components";
import Sidebar from '../../comps/Sidebar';
import RightSidebar from '../../comps/RightSidebar';
import TutorComp from '../../comps/TutorComp';

const FindATutorPage = styled.div`
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
    margin-left: 240px;
    padding: 20px 40px 40px 40px;
    text-align: start;
    display: flex;
    flex-direction: column;
`;

const Dropdown = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 10px;
`;

const Select = styled.select`
    width: 110px;
    height: 30px;
    border: none;
    background: #D6D6D6;
    cursor: pointer;
`;

const Label = styled.label`
    margin-bottom: 5px;
`;

const Option = styled.option``;

const Title = styled.h1``;

const Submit = styled.input`
    height: 30px;
    border: none;
    background: #018EA2;
    color: white;
    cursor: pointer;
`;

const Form = styled.form`
    display: flex;
    margin-top: 10px;
`;

export default function FindATutor() {
  const HandleBoxClick = (str)=>{
    alert(str);
  }

  return <FindATutorPage>
    <Sidebar />
    <Content>
        <Title>Find A Tutor</Title>
        <Label>Filters:</Label>
        <Form>
            <Dropdown>
                <Select name="language">
                    <Option selected disabled>Language</Option>
                    <Option value="javascript">JavaScript</Option>
                    <Option value="html">HTML</Option>
                    <Option value="css">CSS</Option>
                    <Option value="java">Java</Option>
                </Select>
            </Dropdown>
            <Dropdown>
                <Select name="price">
                    <Option selected disabled>Price</Option>
                    <Option value="free">Free</Option>
                    <Option value="under10">Under $10</Option>
                    <Option value="10to20">$10 - $19</Option>
                    <Option value="20to30">$20 - $29</Option>
                    <Option value="30to40">$30 - $39</Option>
                    <Option value="40to50">$40 - $49</Option>
                    <Option value="50plus">$50+</Option>
                </Select>
            </Dropdown>
            <Dropdown>
                <Select name="rating">
                    <Option selected disabled>Rating</Option>
                    <Option value="5star">5 star</Option>
                    <Option value="4star">4 star</Option>
                    <Option value="3star">3 star</Option>
                    <Option value="2star">2 star</Option>
                    <Option value="1star">1 star</Option>
                    <Option value="0star">0 star</Option>
                </Select>
            </Dropdown>
            <Dropdown>
                <Select name="availability">
                    <Option selected disabled>Availability</Option>
                </Select>
            </Dropdown>
            <Submit label="Submit" type="submit"/>
        </Form>
      <TutorComp name="Angela Miller" img="angelamiller.jpg" text="Since high school, she has been immersed in the technological aspect of the world. She has been following the latest tech trends and performs well in school projects and assignments. She enjoys being helpful and is willing to share her knowledge with other people."/>
      <TutorComp />
    </Content>
    <RightSidebar />
  </FindATutorPage>
}