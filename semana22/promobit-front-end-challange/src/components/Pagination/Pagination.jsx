import React, { useContext, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { useStyles } from './style'
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { goToPage, goToSearch } from '../../routes/coordinator';
import Stack from '@mui/material/Stack';
import GlobalStateContext from '../../global/GlobalStateContext';


export default function PaginationControlled(props) {

    const { states, setters } = useContext(GlobalStateContext)
    const { setCurrentPage } = setters
    const { isSearching, querySearch } = states
    const [pageIncrementation, setpageIncrementation] = useState(10)
    const history = useHistory()

    useEffect(() => {
        if (props.page >= 10) {
            setpageIncrementation(Number(props.page) + 1)
        } else {
            setpageIncrementation(10)
        }
    }, [props])

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