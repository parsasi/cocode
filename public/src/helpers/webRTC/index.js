
import WebRTC from './WebRTC.js'

const bootstrap  = ({getUserMedia , setLocalMedia , setRemoteMedia , socket , uuid}) => {

    let rtc

    function onIceCandidate(candidate){
        socket.emit('new-ice-candidate',  {candidate ,uuid});
    }

    async function initiateRTC(){
        rtc = new WebRTC({getUserMedia , setRemoteMedia , onIceCandidate})
        await rtc.configStreams()
    }

    async function makeOffer(){
        // console.log('Caller creates an offer')
        await initiateRTC()
        setLocalMedia(await getUserMedia())
        const offer = await rtc.makeOffer()
        socket.emit('call' , {offer , uuid})
    }

    socket.on('offer' , async offer => {
        await initiateRTC()
        setLocalMedia(await getUserMedia())
        // console.log('Callee recieves the offer')
        // console.log(offer)
        const answer = await rtc.recieveOffer(offer)
        socket.emit('answer' , {answer , uuid})
    })

    socket.on('answer' , async answer => {
        // console.log('Caller recieves the answer')
        await rtc && await rtc.recieveAnswer(answer)
    })

    socket.on('new-ice-candidate' , async iceCandidate => {
        // console.log('Ice Candidate receievd')
        try {
            await rtc && await rtc.remoteIceRecieved(iceCandidate)
        } catch (e) {
            console.error('Error adding received ice candidate', e);
        }
    })

    return {makeOffer}
    
}

export default bootstrap

