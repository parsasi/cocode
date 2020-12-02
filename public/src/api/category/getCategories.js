
import axios from 'axios'
import serverUrl from '../../helpers/serverUrl'
import path from 'path'

const getCategories =  async () => {
    const endpoint = '/category'

    const config = {
        headers: {
          'Access-Control-Allow-Origin' : true
        }
    }

    const url = path.join(serverUrl , endpoint)


    return await (await axios.get(url , config)).data
}

export default getCategories


