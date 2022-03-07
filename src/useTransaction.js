import { useStateValue } from "./state/StateProvider";
import { incomeCategories, expenseCategories, resetCategories } from "./constants/categories";


const useTransaction = (title) => {
    resetCategories()
    const [{ transactions }, dispatch] = useStateValue();

    // filter all transactions by categories i.e. income or expense 
    const transactionsType = transactions.filter((t) => t.type === title)

    // total amount for each transactions
    const total = transactionsType.reduce((acc, currVal) => acc += currVal.amount, 0)

    const categories = title === 'income' ? incomeCategories : expenseCategories

    // get each transaction match with categories type
    transactionsType.forEach((t) => {
        const category = categories.find((c) => c.type === t.category)

        if (category) category.amount += t.amount
    })


    // for chart data
    // we require those categories whose amount > 0
    const filteredCategories = categories.filter((c) => c.amount > 0)
    filteredCategories.map((c) => console.log(c.amount))

    // prepare chart data
    const chartData = {
        datasets: [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color)
        }],
        labels: filteredCategories.map((c) => c.type)
    }
    // console.log({ total, categories, filteredCategories, chartData })
    return { total, chartData }

}

export default useTransaction;