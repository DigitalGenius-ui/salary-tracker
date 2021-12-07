export const totalPrice = (transaction) => {
    transaction.reduce((amount, item) => item.price + amount, 0).toFixed(2);
}


export const initialState = {
    transaction : localStorage.getItem("tracker") ?
    JSON.parse(localStorage.getItem("tracker")): [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_ITEM" :
            return {
                ...state,
                transaction : state.transaction.filter(trans => trans.id !== action.payload)
            }
        case "ADD_ITEM" : 
            return{
                ...state,
                transaction : [ ...state.transaction, action.payload ]
            }
        default:
            return state;
    }
}

export default reducer
