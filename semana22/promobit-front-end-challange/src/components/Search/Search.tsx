import { OutlinedInput } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import SearchIcon from '@mui/icons-material/Search';
import { Container } from "./style";
export default function Search() {

    const { input, onChangeInput } = useForm({ search: "" })

    return (
        <Container>
            <OutlinedInput
                className={"search-box"}
                type="search"
                onChange={onChangeInput}
                value={input.search}
                name={"search"}
                inputProps={{ 'aria-label': 'search' }}
                placeholder={"Encontre por um título"}
                endAdornment={<SearchIcon />}
                fullWidth={true}
            />
        </Container>
    )
}