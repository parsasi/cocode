import axios from 'axios'
import serverUrl from '../../helpers/serverUrl'
import path from 'path'

const getSession =  async (token , uuid) => {
    const endpoint = '/session'

    const data = { uuid }

    const config = {
        headers: {
          'Authorization': token,
          'Access-Control-Allow-Origin' : true
        },
        params : data
    }

    const url = path.join(serverUrl , endpoint)


    return await (await axios.get(url , config)).data
}

export default getSession

