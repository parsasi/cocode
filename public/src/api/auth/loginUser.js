import axios from 'axios'
import serverUrl from '../../helpers/serverUrl'
import path from 'path'

const loginUser =  async (email , password) => {
    const endpoint = '/auth/login'

    const config = {
        headers: {
          'Access-Control-Allow-Origin' : true
        }
    }

    const url = path.join(serverUrl , endpoint)

    const data = {email , password}

     
    console.log(url)
    return await (await axios.post(url , data , config)).data
}

export default loginUser
