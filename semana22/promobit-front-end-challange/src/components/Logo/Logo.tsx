import { useContext } from "react";
import { useHistory } from "react-router";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToHome } from "../../routes/coordinator";
import { Logotype } from "./style";

export default function Logo() {
    const { setters } = useContext(GlobalStateContext)
    const { setIsSearching } = setters
    const history = useHistory()

    return (
        <Logotype onClick={() => { setIsSearching(false); goToHome(history) }} >TopMovies</Logotype>
    )
}