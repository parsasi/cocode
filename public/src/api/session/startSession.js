import axios from 'axios'
import serverUrl from '../../helpers/serverUrl'
import path from 'path'

const startSession =  async (token , uuid) => {
    const endpoint = '/session/start'

    const config = {
        headers: {
            'Authorization': token,
            'Access-Control-Allow-Origin' : true
        }
    }

    const url = path.join(serverUrl , endpoint)

    const data = {uuid}

    return await (await axios.put(url , data , config)).data
}

export default startSession
