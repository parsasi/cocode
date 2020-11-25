import React, {useState, useEffect} from 'react'; 
import styled from "styled-components";
import EditItem from '../EditItem';

const Text = styled.div`
    display: inline-flex;
    flex-direction: column;
    position: relative;
    padding: 60px 0px 30px 0px;
    left: 100px;
`;

const AccountEditContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 500px; 
    min-height: 300px; 
    background-color: #FFFFFF;
    box-shadow: 5px 10px 10px #888888;
    border-radius: 30px;
    position: relative;
    z-index: 0;
    top: -80px;
`;

const AccountEdit = ({title, desc}) => {

    return <AccountEditContainer>
        <Text>
            <EditItem title="Username" desc="AdamJ"/>
            <EditItem title="School" desc="British Columbia Institute of Technology"/>
            <EditItem title="Email" desc="00000@gmail.com"/>
            <EditItem title="Password" desc="********"/>
            <EditItem title="Payment Type" desc="VISA"/>
        </Text>
    </AccountEditContainer>
}

AccountEdit.defaultProps = {
}

export default AccountEdit; 