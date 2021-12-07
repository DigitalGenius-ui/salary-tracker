import React from 'react';
import { ContextState } from '../context/Context';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = () => {
    const { alert, setAlert } = ContextState();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setAlert({open : false});
      };

    return (
        <>
        <Snackbar
        open ={alert.open}
        autoHideDuration={2000}
        onClose={handleClose}
        >
            <MuiAlert
            elevation={10}
            onClose={handleClose}
            variant="filled"
            severity={alert.type}
            >
                {alert.message}
            </MuiAlert>
        </Snackbar>
        </>
    )
}

export default Alert
