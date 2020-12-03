export default class WebRTC{
    peerConnection;
    remoteStream;
    constructor( options , configuration = {'iceServers': [{'urls': 'stun:stun.l.google.com:19302'}]}){
        this.peerConnection = new RTCPeerConnection(configuration)
        this.getUserMedia = options.getUserMedia
        this.setRemoteMedia = options.setRemoteMedia
        this.onIceCandidate = options.onIceCandidate
    }

    async configStreams(){
        this.localStream = await this.getUserMedia()
        this.remoteStream = new MediaStream();
        this.trackEventListener()
        this.iceCandidateEventListener()
        this.stateChangeEventListener()
    }

    async makeOffer(){
        this.peerConnection.addStream(await this.getUserMedia())
        const offer = await this.peerConnection.createOffer();
        await this.peerConnection.setLocalDescription(offer)
        return offer
    }

    async recieveOffer(offer){
        const remoteOffer = new RTCSessionDescription(offer)
        this.peerConnection.setRemoteDescription(remoteOffer)
        this.peerConnection.addStream(await this.getUserMedia())
        return await this.answerOffer()
    }

    async answerOffer(){
        const answer = await this.peerConnection.createAnswer();
        await this.peerConnection.setLocalDescription(answer)
        return answer
    }

    async recieveAnswer(answer){
        const remoteSingal = new RTCSessionDescription(answer)
        // peerConnection.addStream(await getUserMedia())
        console.log(this.peerConnection.signalingState)
        await this.peerConnection.setRemoteDescription(remoteSingal)
    }

    async remoteIceRecieved(iceCandidate){
        try{
            await this.peerConnection.addIceCandidate(iceCandidate);
        }catch(err){
            // console.error(err)
        }
    }

    async stateChangeEventListener(){
        this.peerConnection.addEventListener('connectionstatechange', async event => {
            if (this.peerConnection.connectionState === 'connected') {
            }
        })
    }
    async trackEventListener(){
        this.peerConnection.addEventListener('track' , async event => {
            // console.log('remote track recieved')
            this.remoteStream.addTrack(event.track)
            const newStream = this.remoteStream.clone()
            this.setRemoteMedia(newStream)
        })
    }

    async iceCandidateEventListener(){
        this.peerConnection.addEventListener('icecandidate' , event => {
            // console.log('Ice candidate Found')
            if(event.candidate){
                this.onIceCandidate(event.candidate)
            }
        })
    }
    
}