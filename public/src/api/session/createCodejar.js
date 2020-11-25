import axios from 'axios'
import serverUrl from '../../helpers/serverUrl'
import path from 'path'

const createCodejar =  async (token , uuid) => {
    const endpoint = '/session/codejar'

    const config = {
        headers: {
            'Authorization': token,
            'Access-Control-Allow-Origin' : true
        }
    }

    const url = path.join(serverUrl , endpoint)

    const data = {uuid}

    return await (await axios.post(url , data , config)).data
}

export default createCodejar
