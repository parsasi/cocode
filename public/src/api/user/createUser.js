import axios from 'axios'
import serverUrl from '../../helpers/serverUrl'
import path from 'path'

const createUser =  async (email , password , username , firstName , lastName) => {
    const endpoint = '/user/create'

    const config = {
        headers: {
          'Access-Control-Allow-Origin' : true
        }
    }

    const url = path.join(serverUrl , endpoint)

    const data = {email , password , username , firstName , lastName}

    return await (await axios.post(url , data , config)).status
}

export default createUser



// useEffect(() => {
//   async function post(){
//     return await createUser('mail@alice.pro' , '123456' , 'alice' , 'marissa' , 'chung')
//   }

//   console.log(post())
// }, [])
