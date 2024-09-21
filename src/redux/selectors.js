import { createSelector } from "@reduxjs/toolkit";

export const getCategory = (state) => state.category.categories;

export const getIsEditing = (state) => state.category.category.isEditing;

export const getExpenses = (state) => state.transactions.expense;

export const getIncomes = (state) => state.transactions.income;

export const getStatusFilter = (state) => state.filter.filterValue;
// export const getStatusCalendar = (state) => state.filter.calendarValue;

export const getFilteredExpenses = createSelector(
  [getExpenses, getStatusFilter],
  (expenses, filter) => {
    const matchesText = expenses.filter(
      (expense) =>
        expense.category.toLowerCase().includes(filter.text.toLowerCase()) ||
        expense.comment.toLowerCase().includes(filter.text.toLowerCase()) ||
        expense.amount.includes(filter.text) ||
        expense.time.includes(filter.text)
    )
    console.log(matchesText)
    const matchesDate = matchesText.filter((expense) => filter.date ? expense.date === filter.date : true)
    console.log(matchesDate)
    return matchesDate;
  }
);


export const getFilteredIncomes = createSelector(
  [getIncomes, getStatusFilter],
  (incomes, filter) => {
    const matchesText = incomes.filter(
      (income) =>
        income.category.toLowerCase().includes(filter.text.toLowerCase()) ||
        income.comment.toLowerCase().includes(filter.text.toLowerCase()) ||
        income.amount.includes(filter.text) ||
        income.time.includes(filter.text)
    )
    console.log(matchesText)
    const matchesDate = matchesText.filter((income) => filter.date ? income.date === filter.date : true)
    console.log(matchesDate)
    return matchesDate;
  }
);
