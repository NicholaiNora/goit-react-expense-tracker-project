import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  user: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.categories.push(action.payload);
        console.log(state.categories);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            isEditing: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      const newCategories = [...state.categories];
      const index = newCategories.findIndex(
        (category) => category.id === action.payload
      );
      console.log(state.categories);
      state.categories.splice(index, 1);
    },

    updateTask(state, action) {
      const newCategories = [...state.categories];
      for (const category of newCategories) {
        if (category.isEditing === true) {
          category.text = action.payload;
          category.isEditing = false;
        }
      }
    },

    toggleEdit(state, action) {
      const newCategories = [...state.categories];
      const id = action.payload;
      const index = newCategories.findIndex(
        (category) => category.id === action.payload
      );
      console.log(index);
      const index1 = newCategories.findIndex(
        (category) => category.isEditing === true
      );
      console.log(index1);

      // if (newCategories.some((e) => e.isEditing === true)) {
      //   if (index1 !== index) {
      //     const categ = newCategories.find(
      //       (category) => category.isEditing === true
      //     );
      //     categ.isEditing = false;
      //   }
      // }

      for (const category of newCategories) {
        if (category.id === id) {
          category.isEditing = true;
          break;
        }
      }
    },

    closeModal(state) {
        const newCategories = [...state.categories];

      if (newCategories.some((e) => e.isEditing === true)) {
        const categ = newCategories.find(
          (category) => category.isEditing === true
        );
        categ.isEditing = false;
      }
      return;
    },

    saveTask(state, action) {
      // const newCategories = [...state.categories];
      // const index = newCategories.findIndex(
      //   (category) => category.id === action.payload
      // );
      // console.log(state.categories[index]);
      const newCategories = [...state.categories];
      console.log(action.payload)
      for (const category of newCategories) {
        if (category.id === action.payload) {
          
        }
      }
    }
  },
});

export const {
  addTask,
  deleteTask,
  updateTask,
  toggleEdit,
  closeModal,
  saveTask
} = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
