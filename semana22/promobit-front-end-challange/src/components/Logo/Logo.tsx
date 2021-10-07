import { useContext } from "react";
import { useHistory } from "react-router";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToHome } from "../../routes/coordinator";
import { Logotype } from "./style";

export default function Logo() {
    const { setters, functions } = useContext(GlobalStateContext)
    const { setIsSearching } = setters
    const { resetFilterState } = functions
    const history = useHistory()

    return (
        <Logotype onClick={() => { resetFilterState(); setIsSearching(false); goToHome(history) }} >TopMovies</Logotype>
    )
}