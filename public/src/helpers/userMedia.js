export async function getUserMedia(){
    return await navigator.mediaDevices.getUserMedia({video : true})
}

export async function setMedia(videoElement){
    const mediaStream = await getUserMedia()
    console.log(videoElement)
    videoElement.srcObject = mediaStream;
}
