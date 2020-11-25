import React, {useState} from 'react'; 
import styled from 'styled-components';
import Delete from '../../public/trash-solid.svg'
import Arrow from '../../public/chevron_right-24px.svg'

const SessionBox = styled.div`
    border: 1px solid #7B7B7B;
    width: 800px;
    max-height: 60px;
    border-radius:20px;
    display:flex;
    align-items: center;
    cursor:pointer;
    background-color: #FFFFFF;
    div {
       margin-left: 10px;
       padding: 5px;
       flex-grow:1;
    }
`;

const Icon = styled.div`
    display: flex;
    text-align:right;
    img {
        width: 20px;
        height: 20px;
    }
`;

const SessionDes = styled.div`
    background-color: #D6D6D6;
    width: 800px;
    border-radius:20px;
    box-sizing:border-box;
    padding: 20px;
    display:${props=>props.expanded ? "block" : "hidden"};
    opacity:${props=>props.expanded ? 1 : 0};
    height:${props=>props.expanded ? "auto" : "0px"};
    transition:opacity 0.3s;
    margin:${props=>props.expanded ? "10px 0px" : "0px"};
    div {
        margin-top:15px;
    }
`;

const RotateImg = styled.img`
    transform:${props=>props.expanded ? "rotate(90deg)" : "rotate(0deg)"};
    transition: 0.5s;
`;

const Session = ({SessionName, text1, text2, text3}) => {

    const [expanded, setExpanded] = useState(false);

    return <div>
            <SessionBox onClick={()=>{setExpanded(!expanded);}}>
                <div>{SessionName}</div>
                <Icon>
                    <div><img src={Delete} /></div>
                    <div><RotateImg expanded={expanded} src={Arrow} /></div>
                </Icon>
            </SessionBox>
            <SessionDes expanded={expanded}>
                <div><b>Tutor: </b>{text1}</div>
                <div><b>Schedule Time: </b>{text2}</div>
                <div><b>Status: </b>{text3}</div>
            </SessionDes>
    </div>
}
    
    

Session.defaultProps = {
    SessionName:"Session Name",
    text1:"Tutor name",
    text2:"Date",
    text3:"In Progress/Unconfirmed/Finished",
    expand: false
}

export default Session; 