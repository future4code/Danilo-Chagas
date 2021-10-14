import { IconButton, OutlinedInput } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import SearchIcon from '@mui/icons-material/Search';
import { Container } from "./style";
import { useContext, useEffect } from "react";
import { goToSearch } from "../../routes/coordinator";
import { useHistory } from "react-router";
import GlobalStateContext from "../../global/GlobalStateContext";


export default function Search() {

    const { states, setters, functions } = useContext(GlobalStateContext)
    const { filter, isSearching } = states
    const { setIsSearching, setQuerySearch } = setters
    const { resetFilterState } = functions
    const { input, onChangeInput, cleanFields } = useForm({ search: "" })

    const history = useHistory()

    useEffect(() => {
        if (!isSearching) {
            cleanFields()
        }
    }, [filter, isSearching])

    const requestQuery = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (!input.search || !input.search.trim()) { return }
        if (event.key === "Enter") {
            resetFilterState()
            setIsSearching(true)
            setQuerySearch(input.search)
            goToSearch(history, 1, encodeURI(input.search))
        }
    }

    const onClickSearchIcon = () => {
        if (!input.search || !input.search.trim()) { return }
        resetFilterState()
        setIsSearching(true)
        setQuerySearch(input.search)
        goToSearch(history, 1, encodeURI(input.search))
    }

    return (
        <Container>
            <OutlinedInput
                className={"search-box"}
                type="search"
                onChange={onChangeInput}
                value={input.search}
                name={"search"}
                inputProps={{ 'aria-label': 'search' }}
                placeholder={"Busque por título"}
                endAdornment={
                    <IconButton onClick={() => onClickSearchIcon()} >
                        <SearchIcon />
                    </IconButton>
                }
                fullWidth={true}
                onKeyPress={requestQuery}
            />
        </Container>
    )
}