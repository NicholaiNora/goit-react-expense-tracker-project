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
      const index = state.findIndex(
        (category) => category.id === action.payload
      );
      state.splice(index, 1);
    },

    updateTask(state, action) {
      for (const category of state.categories) {
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

      if (newCategories.some((e) => e.isEditing === true)) {
        if (index1 !== index) {
          const categ = newCategories.find(
            (category) => category.isEditing === true
          );
          categ.isEditing = false;
        }
      }

      for (const category of newCategories) {
        if (category.id === id) {
          category.isEditing = true;
          break;
        }
      }
    },

    closeModal(state, action) {
      // console.log(initialState.categories);
        const newCategories = [...state.categories];
      //   const categ = state.categories.find(
      //     (category) => category.isEditing === true
      //   );
      //   console.log(action.payload.text);
      //   if (categ.text === action.payload.text)console.log("still equal");
      // },
      // const newState = Object.assign({}, prevState, action.payload);
      // console.log(newState);
      // console.log(prevState);
      if (newCategories.some((e) => e.isEditing === true)) {
        const categ = newCategories.find(
          (category) => category.isEditing === true
        );
        if (categ.text === action.payload.text) categ.isEditing = false;
        else {
          console.log("dont close");
        }
      }
      return;
    },
    // if(newCategories[0].text === action.payload) {console.log(action.payload);}
    changeInput(state, action) {
      const newCategories = [...state.categories];
      for (const category of newCategories) {
        if (category.isEditing === true) {
          category.text = action.payload;
          break;
        }
      }
    },
  },
});

export const {
  addTask,
  deleteTask,
  updateTask,
  toggleEdit,
  closeModal,
  changeInput,
} = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
