import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import React from 'react'
import Alert from '../components/Alert';
import History from '../components/History';
import Income from '../components/Income';
import Input from '../components/Input';
import Total from '../components/Total';

const TrackerPage = () => {
    const useStyles = makeStyles((theme) => ({
        total:{
            padding: 20,
            backgroundColor : "#19182c",
            color:"white",
            transition: "all 500ms",
            animation: "opacity 1s ",
        }
    }));
    const classes = useStyles();

    const theme = createTheme({
        palette: {
          type : "dark"
        },
      });
    
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.total}>
                <Total/>
                <Income/>
                <History />
                <Input/>
                <Alert/>
            </div>
        </ThemeProvider>
    )
}

export default TrackerPage
