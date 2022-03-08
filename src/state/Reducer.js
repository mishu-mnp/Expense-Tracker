export const initialState = {
    transactions: JSON.parse(localStorage.getItem('transactions')) || [{ "amount": 1200, "category": "House", "type": "expense", "date": "2022-03-15", "id": "9141c7f2-6870-45f9-9b8e-ec1bb3054fe2" }, { "amount": 2000, "category": "Business", "type": "income", "date": "2022-03-02", "id": "be8e5f5f-93c2-4486-b0ac-5fd6f85392e3" }]
}

let _transactions;

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_Transaction":
            _transactions = [...state.transactions, action.transaction]
            localStorage.setItem('transactions', JSON.stringify(_transactions))
            return {
                ...state,
                transactions: _transactions
            }

        case "DELETE_Transaction":
            _transactions = state.transactions.filter((transaction) => transaction.id !== action.id)
            localStorage.setItem('transactions', JSON.stringify(_transactions))
            return {
                transactions: _transactions
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;