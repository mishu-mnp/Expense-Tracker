export const initialState = {
    transactions: []
}


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_Transaction":
            return {
                ...state,
                transactions: [...state.transactions, action.transaction]
            }
        case "DELETE_Transaction":
            const newTransaction = state.transactions.filter((transaction) => transaction.id !== action.id)
            return {
                transactions: newTransaction
            }
        default:
            return {
                state
            }
    }
}

export default reducer;