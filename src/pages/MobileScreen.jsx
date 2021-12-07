import { makeStyles } from '@material-ui/core';
import React from 'react';
import Loading from '../components/Loading';
import Welcome from '../components/Welcom';
import { ContextState } from '../context/Context';
import TrackerPage from './TrackerPage';

const MobileScreen = () => {
    const { loading, open, openHandler, showTracker } = ContextState();

    const useStyles = makeStyles((theme) => ({
        screen:{
            width: "30rem",
            height: "36rem",
            margin : "2rem auto",
            borderRadius: "5px",
            backgroundColor : "#000",
            padding : "1rem 0",
            [theme.breakpoints.down("600")]:{
                width: "90%",
            }
        },
        camera:{
            width: "8px",
            height: "8px",
            backgroundColor : "#fff",
            margin: "auto",
            borderRadius : "50px"
        },
        layer:{
            width: "28rem",
            height: "30rem",
            backgroundColor : "#fff",
            margin:"1rem auto",
            overflow: "scroll",
            scrollbarWidth: "none" ,
            transition: "all 500ms",
            "&::-webkit-scrollbar":{
                display: "none",
            },
            [theme.breakpoints.down("600")]:{
                width: "94%",
            }
        },
        white:{
            width: "28rem",
            height: "30rem",
            backgroundColor : "#000",
            border : "1px solid #ffffff47",
            margin:"1rem auto",
            overflow: "scroll",
            scrollbarWidth: "none" ,
            transition: "all 500ms",
            "&::-webkit-scrollbar":{
                display: "none",
            },
            [theme.breakpoints.down("600")]:{
                width: "94%",
            }
        },
    }));
    const classes = useStyles();
    return (
        <div className={classes.screen}>
            <div className={classes.camera}></div>
            <div className={open ? classes.layer : classes.white}>
                {loading ? <Loading/> : <>
                    {showTracker ? (<TrackerPage/>):(<Welcome />)}
                </>
                }
            </div>
            <div onClick={openHandler} className={showTracker ? "btn2" : "btn"}></div>
        </div>
    )
}

export default MobileScreen
