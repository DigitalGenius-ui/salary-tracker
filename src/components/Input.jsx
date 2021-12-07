import { makeStyles } from '@material-ui/core'
import React from 'react'
import { ContextState } from '../context/Context';
import { v4 as uuidv4 } from 'uuid';

const Input = () => {
    const useStyles = makeStyles((theme) => ({
        input:{
            width:"100%",
            padding : "0.6rem",
            margin : "0.5rem 0",
            outline : "none"
        }
    }));
    const classes = useStyles();
    const { title, setTitle, price, setPrice, addHandler, setAlert } = ContextState();

    const add = (e) => {
        e.preventDefault();
        setTitle('');
        setPrice('');
        if(title === '' || price === ''){
            return setAlert({
                open : true,
                message : "Please Fill The Spaces",
                type : "error"
            })
        }
    const newAction = {
            id : uuidv4(),
            title,
            price : +price
        }
        addHandler(newAction);
    }



    return (
        <div>
            <h4 style={{margin : "1rem 0 0.5rem 0", fontWeight : "400"}}>Add Your History</h4>
            <p
            style={{border : "1px solid #fff", margin : "0.5rem 0", padding : "0.5rem", fontSize: "0.8rem"}}
            >Add your salary or expenses with specific name. Please make sure to put ( - ) 
            before your expenses amount. </p>
            <form onSubmit={add}>
                <input type="text" placeholder="What Do You Want To Add" 
                value={title} onChange={(e) => setTitle(e.target.value)}
                className={classes.input}/>
                <input type="text" placeholder="Enter Your Amount" 
                value={price} onChange={(e) => setPrice(e.target.value)}
                className={classes.input}/>
                <button variant="contained" style={{padding : "0.3rem 1rem",marginTop : "0.5rem", cursor:"pointer"}}>Submit</button>
            </form>
        </div>
    )
}

export default Input
