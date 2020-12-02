import axios from 'axios'
import serverUrl from '../../helpers/serverUrl'
import path from 'path'

const getTutorRequests =  async (token) => {
    const endpoint = '/request/tutor'

    const config = {
        headers: {
          'Authorization': token,
          'Access-Control-Allow-Origin' : true
        }
    }

    const url = path.join(serverUrl , endpoint)


    return await (await axios.get(url , config)).data
}

export default getTutorRequests


