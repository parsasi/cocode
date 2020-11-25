import React, {useState} from 'react'; 
import styled from "styled-components";

const ProfileCon = styled.div`
    display:flex;
    flex-direction:column;
`;

const TitleName = styled.div`
    border-bottom: 1px solid black;
    display:flex;
    width:370px;
    height:42px;
    font-size:20px; 
    align-items: center;
`;

const Option = styled.div`
    margin-top:19px;
    text-align:center;
    flex-grow:1;
    box-shadow: ${props=>props.clicked ?  "0 8px 6px -6px black" : "none"};
    font-weight:${props=>props.clicked ?  "bold" : "none"};
    height:22px;
    box-sizing:border-box;
    align-items: center;
    cursor:pointer;
    &:hover {
        box-shadow:0 10px 8px -8px black;
    }
`;

const Details = styled.div`
    font-size:16px; 
    padding:25px;
    display:${props=>props.clicked ? "flex" : "none"};
    flex-direction:column;
    margin-top:10px;
`;

const UserInfo = ({school, major, text1, text2}) => {
    const[clicked, setClicked] = useState(1);

    return <ProfileCon>
        <TitleName>
            <Option clicked={clicked === 1} onClick={() => {
                setClicked(1);
            }}>
                Education
            </Option>
            <Option clicked={clicked === 2} onClick={() => {
                setClicked(2);
            }}>
                Experience
            </Option>
            <Option clicked={clicked === 3} onClick={() => {
                setClicked(3);
            }}>
                Reviews
            </Option>
        </TitleName>
        <div>
            <Details clicked={clicked === 1}>
                <div><b>{school}</b></div>
                <div>{major}</div>
            </Details>
            <Details clicked={clicked === 2}>
                {text1}
            </Details>
            <Details clicked={clicked === 3}>
                {text2}
            </Details>
        </div>
    </ProfileCon>   
}

UserInfo.defaultProps = {
    school:"School",
    major:"Your Major",
    text1:"Teaching Experience",
    text2:"Student's Reviews"
    
}

export default UserInfo; 
