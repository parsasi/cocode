import axios from 'axios'
import serverUrl from '../../helpers/serverUrl'
import path from 'path'

const getUserAttend =  async (token) => {
    const endpoint = '/attend/user'

    const config = {
        headers: {
          'Authorization': token,
          'Access-Control-Allow-Origin' : true
        }
    }

    const url = path.join(serverUrl , endpoint)


    return await (await axios.get(url , config)).data
}

export default getUserAttend



// const [token , ] = useToken()

//     useEffect(() => {
//         const fetch = async () => {
//             const attends = await getUserAttend(token)
//             console.log(attends)
//         }

//         fetch()
//     } , [])