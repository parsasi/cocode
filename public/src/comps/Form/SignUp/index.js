import React from 'react'; 
import styled from "styled-components";
import InPut from "../Input";
import Filter from "../../Filter";
import LOGO from '../../../public/logo.svg';

const FormContainer = styled.div`
    height:auto;
    box-sizing:border-box;
    display: flex;
    flex-direction: column;
    align-content:center;  
    align-items:center;
    padding:40px;     
`;

const Logo = styled.img`
    margin-bottom:50px;
    width:224px;
    height:106px;
`;

const Title = styled.div`
    font-size: 25px;
    margin-bottom:10px;
`;

const InputBox = styled.div`
    div{
        display:flex;
        flex-direction:column;
        margin-top: 10px;
        text-align:left;
    }
`;

const Choose = styled.div`
    display: flex;
    margin-top: 25px;
    font-size: 18px;
    label{
        margin-right:20px;
    }
`;

const SignupForm = ({title}) => {
    return <FormContainer>
            <Logo src={LOGO}/>
            <Title>
                <div>
                    <b>{title}</b>
                </div>
            </Title>
        <InputBox> 
            <div>
                <InPut />
            </div>
            <div>
                <InPut label="Email" type="email" ph="Email"/>
            </div>
            <div>
                <InPut label="Password" type="password" ph="Password"/>
            </div>
        </InputBox>
        <Choose>
            <label>You are a:</label>
            <div>
                <Filter FilterName="Student" text1="Tutor"/>
            </div>
        </Choose>
    </FormContainer>
}

SignupForm.defaultProps = {
    title: "Get Started With A Free Account!",
    
}

export default SignupForm; 