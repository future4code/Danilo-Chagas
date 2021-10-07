import { IconButton, OutlinedInput } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import SearchIcon from '@mui/icons-material/Search';
import { Container } from "./style";
import { SyntheticEvent, useContext } from "react";
import { goToSearch } from "../../routes/coordinator";
import { useHistory } from "react-router";
import GlobalStateContext from "../../global/GlobalStateContext";


export default function Search() {

    const { setters, functions } = useContext(GlobalStateContext)
    const { setIsSearching, setQuerySearch } = setters
    const { resetFilterState } = functions
    const { input, onChangeInput } = useForm({ search: "" })

    const history = useHistory()

    const requestQuery = (event: React.KeyboardEvent<HTMLDivElement>) => {

        if (event.key === "Enter") {
            resetFilterState()
            setIsSearching(true)
            setQuerySearch(input.search)
            goToSearch(history, 1, encodeURI(input.search))
        }
    }

    const onClickSearchIcon = () => {
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