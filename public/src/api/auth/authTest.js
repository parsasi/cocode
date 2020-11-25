import axios from 'axios'
import serverUrl from '../../helpers/serverUrl'
import path from 'path'

const authTest =  async (token) => {
    const endpoint = '/auth/test'

    const config = {
        headers: {
          'Authorization': token,
          'Access-Control-Allow-Origin' : true
        }
    }

    const url = path.join(serverUrl , endpoint)


    return await (await axios.get(url , config)).data
}

export default authTest


// const [token , ] = useToken()



//   useEffect(() => {

//     async function fetch(){
//       return await authTest(token)
//     }

//     fetch()
//   } , [token])