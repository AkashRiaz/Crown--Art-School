import React, { useContext } from 'react'

 import {useQuery} from '@tanstack/react-query'
import { AuthContext } from '../providers/AuthProviders'


const useInstructorAddClasses = email =>{
    const {user} = useContext(AuthContext)
    const { isLoading,refetch, data : addedClass=[]} = useQuery({
        queryKey: ['addedClass', user?.email],
        queryFn: async ()=>{
            const response = await fetch(`http://localhost:5000/classes/${user?.email}`,{
                headers: {
                  'Content-Type': 'application/json', // Adjust the content type based on your backend requirements
                  // Add any other headers that your backend expects
                },
              })
            return response.json()
        },
      })
      return [addedClass, refetch]
}

export default useInstructorAddClasses;