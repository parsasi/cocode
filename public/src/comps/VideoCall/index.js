import React from 'react'
import styled from "styled-components"
import { useSocket } from '../../hooks/useSocket'
import Button from '../Button'



export default function VideoCall(props){


    const [emit , on] = useSocket()

    const Webcam1 = styled.div``;

    const Webcam2 = styled.div``;

    const Webcams = styled.div`
    width:100%;
    height:150px;
    display:flex;
    justify-content:center;
    align-items:center;
    `;

    // useEffect(() => {
    //     // on('connection' , () => console.log('connection'))
    //     emit('room' , {id : props.uuid})
    // } , [])

    return (
        <Webcams>
            <Webcam1>
            <video id="local-video" height="190" width="300"/>
            </Webcam1>
            <Webcam2>
            <video height="190px" src="https://r1---sn-nx5s7n7s.googlevideo.com/videoplayback?expire=1606208664&ei=OHi8X8DoM5nP1wLQ357wAw&ip=37.252.8.185&id=e08910daf9bd19c6&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=qdkUAGsEhnj88J8cah79ScIF&gir=yes&clen=9540125&ratebypass=yes&dur=183.205&lmt=1606160203685199&fvip=1&c=WEB&txp=5510222&n=ER8G2wMsNdfbFsZ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgMj7q9XMXU0GOmzwlusbHM8AehgvP9n_ybIKY4s3GujACIHLFgvgQXm21s7pULcXJghBhDw1dnsoOzGklHA4iYFMu&redirect_counter=1&rm=sn-5goll7e&req_id=79a7229ba8dfa3ee&cms_redirect=yes&ipbypass=yes&mh=Ng&mip=66.115.147.200&mm=31&mn=sn-nx5s7n7s&ms=au&mt=1606199798&mv=m&mvi=1&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgZqJOcXIN6tsW0aX1DcyR4BYt9mHbKhnHb-COhQAhg-8CIB8tqT5NtG9p5mJmJahvOP1NOBmbI6FIA4WHlBA3D8rI"/>
            </Webcam2>
            <Button text="Start Call" /> 
        </Webcams>
    )
    
}