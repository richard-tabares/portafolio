// import { useState, useEffect } from "react"
// // import { getMenu } from "../helpers/getMenu"

// export const useFetchData = (url,getInfo) => {

//     const [data, setData] = useState([])

//     const getData = async () => {
//         const jsonData = await getInfo(url)
//         setData(jsonData)
//     }
//     useEffect(() => {

//         getData()

//     }, [])

//     return data
// }
import { useState, useEffect } from "react"

export const useFetchData = (url) => {

    const [data, setData] = useState([])

    const getData = async () => {

        const response = await fetch(url)
        const jsonData = await response.json()
        setData(jsonData)
    }
    useEffect(() => {

        getData()

    }, [])

    return data
}