import React, { useContext } from 'react'
 import {useQuery} from '@tanstack/react-query'
import { AuthContext } from '../providers/AuthProviders'


const useManageClasses = () =>{
    const {user} = useContext(AuthContext)
    const { isLoading,refetch, data:totalClass=[] } = useQuery({
        queryKey: ['classes'],
        queryFn: async ()=>{
            const response = await fetch(`http://localhost:5000/classes`)
            return response.json()
        },
      })
      return [totalClass, refetch]
}

export default useManageClasses;