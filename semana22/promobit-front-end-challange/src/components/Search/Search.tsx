import { IconButton, OutlinedInput } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import SearchIcon from '@mui/icons-material/Search';
import { Container } from "./style";
import { SyntheticEvent } from "react";
import { goToSearch } from "../../routes/coordinator";
import { useHistory } from "react-router";
export default function Search() {

    const { input, onChangeInput } = useForm({ search: "" })

    const history = useHistory()

    const requestQuery = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") goToSearch(history, encodeURI(input.search))

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
                    <IconButton onClick={() => goToSearch(history, encodeURI(input.search))} >
                        <SearchIcon />
                    </IconButton>
                }
                fullWidth={true}
                onKeyPress={requestQuery}
            />
        </Container>
    )
}