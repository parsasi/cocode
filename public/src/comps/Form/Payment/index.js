import React from 'react'; 
import styled from "styled-components";
import InPut from "../Input"

const FormContainer = styled.div`
    max-width:455px;
    height:auto;
    box-sizing:border-box;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    font-size: 25px;
    margin-bottom:10px;
`;

const InputBox = styled.div`
    div{
        display:inline-flex;
        flex-direction:column;
        margin-top: 10px;
    }
`;

const PaymentForm = ({title}) => {
    return <FormContainer>
            <Title>
                <div>
                    <b>{title}</b>
                </div>
            </Title>
        <InputBox> 
            <div>
                <InPut label="Name on Card:" type="text" ph="Name on card"/>
            </div>
            <div>
                <InPut label="Credit Card Number:" type="number" ph="Credit card number"/>
            </div>
            <div>
                <InPut changeWidth="false" label="Expiry Date:" ph="MM/YY" />
            </div>
            <div>
                <InPut changeWidth="false" label="CVC:" ph="CVC" />
            </div>
            <div>
                <InPut changeWidth="false" label="Postal Code for Billing:" ph="Postal code" />
            </div>
        </InputBox>
    </FormContainer>
}

PaymentForm.defaultProps = {
    title: "Payment Method",
}

export default PaymentForm; 