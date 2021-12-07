import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ContextState } from '../context/Context';

const Total = () => {
    const useStyles = makeStyles((theme) => ({
        total:{
            border : "1px solid #ffffff",
            display: "inline-block",
            padding : "1rem",
            borderRadius : "7px"
        }
    }));
    const classes = useStyles();
    const { transaction } = ContextState();
    const amount = transaction.map(transaction => transaction.price);
    const total = amount.reduce((acc , item) => (acc += item), 0).toFixed(2);
    return (
        <div className={classes.divide}>
            <div className={classes.total}>
                <h4>Your Total Balance</h4>
                <h1 style={{paddingTop : 10}}>$ {Math.abs(total)}</h1>
            </div>
        </div>
    )
}

export default Total
