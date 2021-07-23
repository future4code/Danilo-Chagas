import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToLoginPage } from '../router/coordinator'

const useProtectedPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (!token){
        goToLoginPage(history)
    }
  }, [history])
}

export default useProtectedPage