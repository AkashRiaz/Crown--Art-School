import React, { useContext } from 'react'

 import {useQuery} from '@tanstack/react-query'
import { AuthContext } from '../providers/AuthProviders'
import useAxiosSecure from './useAxiosSecure'


const useSelectedClass = email =>{
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const token = localStorage.getItem('access-token')
    const { isLoading,refetch, data : selectedClass=[]} = useQuery({
        queryKey: ['selectedClass', user?.email],
        queryFn: async ()=>{
            const response = await axiosSecure(`/selectedClass/${user?.email}`)
            console.log('selected class', response)
            return response.data;
            // return response.json()
        },
      })
      return [selectedClass, refetch]
}

export default useSelectedClass;