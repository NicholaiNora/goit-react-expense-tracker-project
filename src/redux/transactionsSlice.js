import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    expense: [],
    income: [],

};
const randomRGB = () => {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
    return RGBColor;
  }
  

const transactionsSlice = createSlice({
    name: "transactions",
    initialState: initialState,
    reducers: {
        addTask: {
            reducer(state, action) {
                if (action.payload.transaction === "expense") {
                    state.expense.push(action.payload);
                    const expenses = [...state.expense]
                    console.log(expenses);
                }
                if (action.payload.transaction === "income") {
                    state.income.push(action.payload);
                    const incomes = [...state.income]
                    console.log(incomes);
                }
                    
            },
            prepare({transaction, date, time, category, amount, comment}) {
                return {
                    payload: {
                        id: nanoid(),
                        transaction,
                        date,
                        time,
                        category,
                        amount,
                        comment,
                        color: randomRGB(),
                    },
                };
            }
        }
    }
})


export const {
    addTask,
    // deleteTask,
    // updateTask,
    // toggleEdit,
    // closeModal,
    // saveTask
  } = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;