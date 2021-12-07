import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import reducer, { initialState } from './reducer';

export const InputContext = createContext();

const Context = (props) => {
    const [show, setShow] = useState(true);
    const [open, setOpen] = useState(false);
    const [welcome, setWelcome] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showTracker, setShowTracker] = useState(false);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [alert, setAlert] = useState({
        open : false,
        message : '',
        type : "error"
    })

    const [state, dispatch] = useReducer(reducer, initialState);

    const deleteHandler = (id) => {
        dispatch({
            type:"DELETE_ITEM",
            payload : id
        })
    }

    const openHandler = () => {
        setOpen(true);
        setShow(false);
        setLoading(true);
        setTimeout(() => {
            setWelcome(true);
            setLoading(false);
        }, 1000);
    }

    const openTracker = () => {
        setLoading(true);
        setTimeout(() => {
            setShowTracker(true);
            setLoading(false);
        }, 1000);
    }

    const addHandler = (transaction) => {
        dispatch({
            type : "ADD_ITEM",
            payload : transaction,
        })
    }

    useEffect(() => {
        localStorage.setItem("tracker", JSON.stringify(state.transaction));
    },[state.transaction])

    return (
        <InputContext.Provider value={{
            show,
            open,
            welcome,
            loading,
            openHandler,
            openTracker,
            showTracker,
            transaction : state.transaction,
            deleteHandler,
            title, setTitle,
            price, setPrice,
            addHandler,
            alert, setAlert
        }}>
            {props.children}
        </InputContext.Provider>
    )
}

export default Context;


export const ContextState = () => useContext(InputContext);
