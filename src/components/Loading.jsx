import { CircularProgress, makeStyles } from '@material-ui/core';
import React from 'react';

const Loading = () => {
    const useStyles = makeStyles((theme) => ({
        loading:{
            width: "100%",
            height: "30rem",
            display: "flex",
            alignItems : "center",
            justifyContent : "center",
        }
    }));
    const classes = useStyles();
    return (
        <div className={classes.loading}>
            <CircularProgress/>
        </div>
    )
}

export default Loading
