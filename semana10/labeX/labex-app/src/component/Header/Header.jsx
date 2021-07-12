import React, { useState } from 'react'
import { Container } from './style'
import { useHistory } from 'react-router-dom'
// import useIsLogged from '../../hooks/isLogged';

export default function Header () {

    const [login] = useState(true)

    // const tokenVerify = useIsLogged()

    // useEffect(()=>{
    //     tokenVerify ?
    //     setLogin(true) : setLogin(false)
    //     console.log(tokenVerify,login)
    // },[tokenVerify])

    const history = useHistory();

    const goToHome = () => {
        return history.push("/")
    }

    const goToLogin = () => {
        return history.push("/admin/login")
    }

    const logout = () => {
        localStorage.removeItem("token")
        return history.push("/admin/login")

    }

    return <Container>

        <h6
        onClick={goToHome}
        >Logotipo</h6>

        {login?
        <button onClick={goToLogin}>Login</button> :
        <button onClick={logout}>Logout</button>
    }

    </Container>
}