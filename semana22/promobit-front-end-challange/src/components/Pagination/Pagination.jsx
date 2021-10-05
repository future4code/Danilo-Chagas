import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { useStyles } from './style'
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { goToPage } from '../../routes/coordinator';
import Stack from '@mui/material/Stack';


export default function PaginationControlled(props) {

    const history = useHistory()

    const [pageIncrementation, setpageIncrementation] = useState(10)

    useEffect(() => {
        if (props.page >= 10) {
            setpageIncrementation(Number(props.page) + 1)
        } else {
            setpageIncrementation(10)
        }
    }, [props])

    const onChangePagination = (event, value) => {
        goToPage(history, value)
    };

    return (
        <Stack spacing={2}>
            <Pagination count={pageIncrementation} page={Number(props.page)} onChange={onChangePagination} />
        </Stack>
    );
}