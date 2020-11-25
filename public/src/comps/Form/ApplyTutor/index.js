import React from 'react'; 
import styled from "styled-components";
import InPut from "../Input";
import Filter from '../../Filter';
import Button from '../../Button';

const FormContainer = styled.div`
    height:auto;
    box-sizing:border-box;
    display:flex;
`;

const Title = styled.div`
    font-size: 25px;
    margin-bottom:40px;
`;

const InputBox1 = styled.div`
    display:flex;
    flex-direction:column;
    flex-grow:1;
`;

const InputBox2 = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:60px;
`;

const Label = styled.p`
    margin-bottom:10px;
    font-text:16px;
`;

const ApplyForm = ({title}) => {
    return <FormContainer>
        <InputBox1> 
            <Title>
                <b>{title}</b>
            </Title>
            <div>
                <InPut label="Name*" type="text" ph=""/>
            </div>
            <div>
                <InPut label="Email*" type="email" ph=""/>
            </div>
            <div>
                <InPut label="School*" type="text" ph="" />
            </div>
            <div>
                <InPut label="Major*" type="text" ph="" />
            </div>
            <div>
                <Label>Degree*</Label>
                <Filter FilterName="Degree" reMove2="false" text1="Master" text3="Bachelors" text4="Associate Degree"/>
            </div>
            <div>
                <InPut label="Add Other School (Optional)" type="text" ph="" />
            </div>
            <div>
                <InPut label="Add Other Major (Optional)" type="text" ph="" />
            </div>  
        </InputBox1>
        <InputBox2>
            <div>
                <Label>Add Other Degree (Optional)</Label>
                <Filter FilterName="Degree" reMove2="false" text1="Master" text3="Bachelors" text4="Associate Degree"/>
            </div>
            <div>
                <Label>Do you have any teaching experience?</Label>
                <Filter FilterName="Yes/No" reMove1="false" text1="Yes" text2="No"/>
            </div>
            <div>
                <InPut label="Brief Bio*" type="text" ph="" height="365px" width="384px"/>
            </div>
            <div>
                <Button text="Submit"/>
            </div>
        </InputBox2>
    </FormContainer>
}

ApplyForm.defaultProps = {
    title: "Become A Tutor",
}

export default ApplyForm; 