import {useCallback} from 'react'

export const useMessage = () => {
    return useCallback((data) => {
        if (window.M && data && data.message) {
            window.M.toast({html: data.message})
        }
    }, [])
}