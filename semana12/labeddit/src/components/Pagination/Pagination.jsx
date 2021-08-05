import React, { useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { useStyles } from './style'
import { useHistory } from 'react-router-dom';
import { goToFeedPage } from '../../router/coordinator';
import { useEffect } from 'react';

export default function PaginationControlled(props) {
    
    const classes = useStyles();

    const history = useHistory()

    const [pageIncrementation , setpageIncrementation] = useState(10)

    useEffect(()=>{
        if (props.page >= 10) {
            setpageIncrementation(Number(props.page)+1)
        } else {
            setpageIncrementation(10)
        }
    },[props])

    const onChangePagination = (event, value) => {
        goToFeedPage(history,value)
    };

    return (
        <div className={classes.root}>
            <Pagination count={pageIncrementation} page={Number(props.page)} onChange={onChangePagination} />
        </div>
    );
}