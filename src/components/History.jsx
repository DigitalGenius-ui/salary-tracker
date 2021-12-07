import React from 'react';
import { ContextState } from '../context/Context';
import HistoryUi from './HistoryUi';

const History = () => {
    const { transaction } = ContextState();
    return (
        <div >
            <h4 style={{fontWeight:400}}>
                {transaction.length > 0 ? "History" : "Your History is Empty"}
            </h4>
            {transaction.map((item) => {
                return <HistoryUi key = {item.id} item ={item}/>
            })}
        </div>
    )
}

export default History
