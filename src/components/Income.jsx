import { makeStyles } from '@material-ui/core';
import React from 'react';
import { ContextState } from '../context/Context';

const Income = () => {
    const useStyles = makeStyles((theme) => ({
        income:{
            margin : "1rem 0",
            display : "flex",
            justifyContent : "space-between",
            gap : 15,
            [theme.breakpoints.down("xs")]:{
                display: "flex",
                flexDirection : "column"
            }
        },
        money:{
            border : "1px solid #fff",
            flex : 1,
            padding : "1rem"
        }
    }));
    const classes = useStyles();

    const { transaction } = ContextState();
    const amount = transaction.map(item => item.price);
    const income = amount.filter((item) => item > 0).reduce((prev, cure) => (prev += cure),0).toFixed(2);
    const expenses = amount.filter((item) => item < 0).reduce((prev, cure) => (prev += cure),0).toFixed(2);
    return (
        <div className={classes.income}>
            <div className={classes.money}>
                <h5 style={{fontWeight : "400"}}>Your Income</h5>
                <h2 style={{marginTop : 10}}>+ ${Math.abs(income)}</h2>
            </div>
            <div className={classes.money}>
                <h5 style={{fontWeight : "400"}}>Your Expense</h5>
                <h2 style={{marginTop : 10}}>- ${Math.abs(expenses)}</h2>
            </div>
        </div>
    )
}

export default Income
