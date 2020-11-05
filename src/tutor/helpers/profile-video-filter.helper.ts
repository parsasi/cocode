import { v4 as uuidv4 } from 'uuid'

// function verifySize(fileSize : number , maxSize) : boolean{
//     return fileSize <= maxSize;
// }


function VerifyType(fileType : string , acceptedTypes : string[]) : boolean{
    return acceptedTypes.includes(fileType)
}

export function VerifyFile(req , file , cb){

    const conditions = {
        maxSize : 20000,
        acceptedTypes : ['video/mp4']
    }

    const typeVerification = VerifyType(file.mimetype , conditions.acceptedTypes)
    // const sizeVerification = verifySize(file.size , conditions.maxSize)

    
    if(typeVerification){
        cb(null ,  true);
    }
    else{
        cb(null , false);
    }
    

}

export function ModifyFile(file){
    const extention : string = getExtention(file.originalname)
    const name : string =  uuidv4()
    const fullName = name.concat('.' , extention)
    return {...file , originalname : fullName}
}


export function getExtention(fileName : string) : string{
    const fileNameArray = fileName.split('.')
    const fileExtention = fileNameArray.length > 1 ? fileNameArray.pop() : ''
    return fileExtention
}
