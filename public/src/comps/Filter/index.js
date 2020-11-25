import React, {useState, useEffect} from 'react'; 
import styled, {css} from "styled-components";
import Arrow from '../../public/chevron_right-24px.svg';

const FilterBox = styled.div`
    width: 155px;
    height: 39px;
    border-radius:5px;
    box-sizing:border-box;
    display:flex;
    justify-content:center;
    align-items: center;
    cursor:pointer;
    background-color: #D6D6D6;
    padding: 15px;
    div {
       flex-grow:1;
    }
`;

const Dropdown = styled.div`
    background-color: #FFFF;
    border: 1px solid #D6D6D6;
    box-sizing:border-box;
    width: 155px;
    margin-top: 10px;
    margin-bottom: 10px;
    display:${props=>props.expanded ? "binline-flex" : "hidden"};
    opacity:${props=>props.expanded ? 1 : 0};
    height:${props=>props.expanded ? "auto" : "0px"};
    flex-direction:column;
    transition:opacity 0.3s;
    div{
        padding: 10px;
        cursor:pointer;
    }
    div:hover {
        background-color:#D6D6D6;
    }
`;

const RotateImg = styled.img`
    transform:${props=>props.expanded ? "rotate(90deg)" : "rotate(0deg)"};
    transition: 0.5s;
    width: 20px;
    height: 20px;
    margin-left: 3em;;
`;

const Option = styled.div`
    ${props=>props.reMove1 === true && css`
        display: none;
    `} 
    ${props=>props.reMove2 === true && css`
        display: none;
    `}
`;

const Filter = ({FilterName, text1, text2, text3, text4, reMove1, reMove2}) => {

    const [expanded, setExpanded] = useState(false);

    return <div>
            <FilterBox onClick={()=>{setExpanded(!expanded);}}>
                <div>{FilterName}</div>
                <div><RotateImg expanded={expanded} src={Arrow} /></div>
            </FilterBox>
            <Dropdown expanded={expanded}>
                <div>{text1}</div>
                <Option reMove1={reMove1}>{text2}</Option>
                <Option reMove2={reMove2}>{text3}</Option>
                <Option reMove2={reMove2}>{text4}</Option>
            </Dropdown>
    </div>
}   

Filter.defaultProps = {
    FilterName:"Rating",
    text1:"4.5 & up",
    text2:"4.0 & up",
    text3:"3.5 & up",
    text4:"3.0 & up",
    expand: false,
    reMove1: true,
    reMove2: true
}

export default Filter; 