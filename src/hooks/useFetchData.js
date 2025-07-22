import { useState, useEffect } from "react"
import { supabase } from "../services/supabaseClient"

export const useFetchData = () => {
    
       
    const [data, setData] = useState([])
    
    useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from('users').select()
      if (error) setError(error.message)
      else setData(data)
    }

    fetchUsers()
  }, [])

    console.log(data)

    return data
}