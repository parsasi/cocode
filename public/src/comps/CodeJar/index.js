import React from 'react'
import styled from "styled-components"
import Button from '../Button'

export default function CodeJar(props){


    const Workspace = styled.div`
        width:100%;
        height:calc(100% - 150px);
        display:flex;
        justify-content:center;
        align-items:center;
    `;

    const url = props.session["codejarPublicUrl"] || props.session["codejarAdminUrl"]

    if(url){
        return (
            <Workspace>
                <iframe src={url} title="Collaborative Workspace"></iframe>
            </Workspace>
        )
    }
    else{
        return (
            <Workspace>
                {props.isTutor ? <Button text="Create a Workspace" onClick={_ => props.createWorkspace()}/> : <span> No Workspace Created </span>}
            </Workspace>
        )
    }
}
