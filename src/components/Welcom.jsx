import { Button } from '@material-ui/core'
import React from 'react'
import { ContextState } from '../context/Context';

const Welcome = () => {
    const { welcome, openTracker } = ContextState();
    return (
        <div>
            {welcome ? (
            <div className = "title">
                <h3 className="welcome">Welcome To Your Expenses Tracker App</h3>
                <Button onClick={openTracker} className="button" variant="contained" color="primary">Start</Button>
            </div>
            ): null}
        </div>
    )
}

export default Welcome
