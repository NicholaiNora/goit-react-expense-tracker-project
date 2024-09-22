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
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        if (action.payload.transaction === "expense") {
          state.expense.push(action.payload);
          const expenses = [...state.expense];
          console.log(expenses);
        }
        if (action.payload.transaction === "income") {
          state.income.push(action.payload);
          const incomes = [...state.income];
          console.log(incomes);
        }
      },
      prepare({ transaction, date, time, category, amount, comment }) {
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
      },
    },
    editTask(state, action) {
      const expenseItem = state.expense.find(expense => expense.id === action.payload.id) ?? "";
      const incomeItem = state.income.find(income => income.id === action.payload.id) ?? "";
      if (action.payload.transaction === "expense" && action.payload.id === expenseItem.id) {
        const index = state.expense.findIndex(
          (expense) => expense.id === action.payload.id
        );
        state.expense.splice(index, 1, action.payload);
      } else if (action.payload.transaction !== "expense" && action.payload.id === expenseItem.id) {
        const index = state.expense.findIndex(
          (expense) => expense.id === action.payload.id
        );
        state.expense.splice(index, 1);
        state.income.push(action.payload);
      }

      if (action.payload.transaction === "income" && action.payload.id === incomeItem.id) {
        const index = state.income.findIndex(
          (income) => income.id === action.payload.id
        );
        state.income.splice(index, 1, action.payload);
      } else if (action.payload.transaction !== "income" && action.payload.id === incomeItem.id) {
        const index = state.income.findIndex(
          (income) => income.id === action.payload.id
        );
        state.income.splice(index, 1);
        state.expense.push(action.payload);
      }
    },
    //   editTaskIncome(state, action) {
    //     const index = state.income.findIndex(
    //       (income) => income.id === action.payload.id
    //     );
    //     if (action.payload.transaction === "income") {
    //       state.income.splice(index, 1, action.payload);
    //     }
    //     else {
    //       state.income.splice(index, 1);
    //       state.expense.push(action.payload);
    //     }
    // },
    deleteTask(state, action) {
      if (action.payload.transaction === "expense") {
        const index = state.expense.findIndex(
          (expense) => expense.id === action.payload.id
        );
        state.expense.splice(index, 1);
      }
      if (action.payload.transaction === "income") {
        const index = state.income.findIndex(
          (income) => income.id === action.payload.id
        );
        state.income.splice(index, 1);
      }
    },
  },
});

export const {
  addTask,
  editTask,
  deleteTask,
  // updateTask,
  // toggleEdit,
  // closeModal,
  // saveTask
} = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
