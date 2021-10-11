import { useContext } from 'react';
import Pagination from '@mui/material/Pagination';
import { useHistory } from 'react-router-dom';
import { goToPage, goToSearch } from '../../routes/coordinator';
import Stack from '@mui/material/Stack';
import GlobalStateContext from '../../global/GlobalStateContext';


export default function PaginationControlled(props) {

    const { states } = useContext(GlobalStateContext)
    const { isSearching, querySearch } = states
    const history = useHistory()

    const onChangePagination = (event, value) => {
        if (isSearching) {
            return goToSearch(history, value, encodeURI(querySearch))
        }
        goToPage(history, value)
    };

    return (
        <Stack id={"pagination"} mb={props.position === "top" && 0} mt={props.position === "botton" && 2} spacing={2}>
            <Pagination count={props.totalPages} defaultPage={1} page={Number(props.page)} onChange={onChangePagination} />
        </Stack>
    );
}