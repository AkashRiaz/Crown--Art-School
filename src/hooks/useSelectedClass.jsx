import React, { useContext } from 'react'

 import {useQuery} from '@tanstack/react-query'
import { AuthContext } from '../providers/AuthProviders'


const useSelectedClass = email =>{
    const {user} = useContext(AuthContext)
    const { isLoading,refetch, data : selectedClass=[]} = useQuery({
        queryKey: ['selectedClass', user?.email],
        queryFn: async ()=>{
            const response = await fetch(`http://localhost:5000/selectedClass/${user?.email}`,{
                headers: {
                  'content-type': 'application/json', 
                },
              })
            return response.json()
        },
      })
      return [selectedClass, refetch]
}

export default useSelectedClass;