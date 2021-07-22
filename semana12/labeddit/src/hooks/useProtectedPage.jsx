import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const useProtectedPage = () => {
    const [result, setResult] = useState()
    const history = useHistory()
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token === null) {
            alert("Sem login de usuário.\nFaça login para continuar.")
            history.push("/admin/login")
            setResult(false)
        } else {
            setResult(true)
        }
    },[history])
    return result
}

export default useProtectedPage