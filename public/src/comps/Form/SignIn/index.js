import React, {useState} from 'react'; 
import styled from "styled-components";
import Button from "../../Button";
import {Link} from 'react-router-dom';

const InputBox = styled.div`
    width: 700px;
    height: 730px;
    background-color:#173F5F;
    box-sizing:border-box;
    color: white;
    display: flex;
    flex-direction: column;
    align-items:center;
    align-content:center;
    padding-top: 10%;
`;

const TitleBox = styled.div`
    width:auto;
    height:auto;
    display:flex;
    margin-bottom: 40px;
    font-size: 36px; 
`;

const InputForm = styled.p`
    width:auto;
    height:auto;
    font-size: 18px;
    margin-bottom: 20px;
    div{
        display:flex;
        flex-direction:column;
        margin-bottom: 40px;
        text-align:left;
        input{
            width: 535px;
            height: 70px;
            background-color:#D6D6D6;
            margin-top:10px;
            border:hidden;
        }
    } 
`

const FormSubtitle = styled.p`
    font-size: 16px;
    margin-left: 12em;
    a {
        color: #018EA2;
        margin-left: 10px;
    }
`;

const SigninBut = styled.div`
    width:auto;
    height:auto;
`;


const SigninForm = ({onClick}) => {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    return <InputBox> 
            <TitleBox>
                <div>
                    Sign In
                </div>
                <FormSubtitle>
                    Don't have an account? <Link to="/SignUp" style={{ textDecoration: 'none' }} ><a href="url">Sign Up</a></Link>
                </FormSubtitle>
            </TitleBox>
            <InputForm>
                <div>
                    <label>Email</label>
                    <input type="email" onChange={(e)=>{
                        setEmail(e.target.value)
                    }} placeholder="Email"/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" onChange={e=> {
                        setPass(e.target.value)
                    }} placeholder="Password"/>
                </div>  
            </InputForm>
                <SigninBut>
                        <Button text="Sign In" onClick={()=>{
                            onClick(email, pass)
                        }} />
                </SigninBut>        
    </InputBox>
}

SigninForm.defaultProps = {
    onClick:()=>{}
}

export default SigninForm; 
