import React , {useEffect , useState} from 'react'
import ExploreCategory from '../ExploreCategory'
import getCategories from '../../api/category/getCategories'
import Loading from '../Loading/index'

export default function ExploreCategories(props){
    const [categories , setCategories] = useState([])
    const [loading , setLoading] = useState(true)

    useEffect(() => {
        async function fetch(){
            const data = await getCategories()
            setCategories(data)
            setLoading(false)
        }
        fetch()
    },[])

    return (
       <>
        {
            !loading ?
                categories.map(item => <ExploreCategory key={item.id} text={item.text} image={item.photo}/>)
                : <Loading />
        }
       </>
    )
}
