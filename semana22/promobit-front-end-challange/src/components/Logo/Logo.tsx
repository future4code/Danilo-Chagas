import { useHistory } from "react-router";
import { goToHome } from "../../routes/coordinator";
import { Logotype } from "./style";

export default function Logo() {

    const history = useHistory()

    return (
        <Logotype onClick={() => goToHome(history)} >TopMovies</Logotype>
    )
}