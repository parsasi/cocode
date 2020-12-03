import { formatDistanceToNow } from 'date-fns'

export default function dateFormatter(dateToFormat){
    let date = new Date(dateToFormat)
    console.log(date)
    // date = new Date(date.toLocaleDateString())
    // console.log(dateToFormat)
    // return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}` 
    return formatDistanceToNow(date , {addSuffix : true})
}

export function secondsToHours(seconds){
    return seconds / 3600 + ` Hour`
}