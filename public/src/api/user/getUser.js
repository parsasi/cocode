import axios from 'axios'
import serverUrl from '../../helpers/serverUrl'
import path from 'path'

const getUser =  async (token , username) => {
    const endpoint = '/user'

    const data = username ? {username} : null


    const config = {
        headers: {
          'Authorization': token,
          'Access-Control-Allow-Origin' : true
        } , 
        params : data
    }


    const url = path.join(serverUrl , endpoint)

    console.log(url)


    return await (await axios.get(url , config)).data
}

export default getUser


// const [token , ] = useToken()



//   useEffect(() => {

//     async function fetch(){
//       return await getUset(token)
//     }

//     fetch()
//   } , [token])