import { useQueryClient } from '@tanstack/react-query'
import React from 'react'

const useRefectch = () => {
    const queryClient = useQueryClient()
  return async () => {
    await queryClient.refetchQueries({
        type: 'active'
    })
  }
}

export default useRefectch
