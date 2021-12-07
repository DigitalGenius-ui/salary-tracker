import { makeStyles } from '@material-ui/core';
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { ContextState } from '../context/Context';

const HistoryUi = ({item}) => {
    const useStyles = makeStyles((theme) => ({
        item:{
            display : "flex",
            justifyContent : "space-between",
            alignItems : "center",
            marginTop : "0.5rem",
            border : "1px solid #fff",
            padding : '0.5rem'
        },
        icon:{
            display : "flex",
            alignItems : "center",
            gap : 10
        }
    }));
    const classes = useStyles();
    const sign = item.price > 0 ? "+" : "-";
    const { deleteHandler } = ContextState();
    return (
        <div className={classes.item}>
            <p>{item.title}</p>
            <div className={classes.icon}>
                <p>{sign} ${Math.abs(item.price)}</p>
                <DeleteIcon onClick={() => deleteHandler(item.id)} style={{cursor : "pointer"}}/>
            </div>
        </div>
    )
}

export default HistoryUi
