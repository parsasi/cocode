export async function getUserMedia(){
    const constraints = {
        'video':{
            "width": 640,
            "height": 480
        },
        'audio' : {'echoCancellation': true}
    }
    return await navigator.mediaDevices.getUserMedia(constraints)
}

export async function setMedia(videoElement , stream){
    videoElement.srcObject = stream;
}
