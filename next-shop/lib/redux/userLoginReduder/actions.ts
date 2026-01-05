import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let id = 0;

interface User {
  id: number | null;
  name: string;
}

const initialState: User = { id: null, name: "" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<{ name: string }>) => {
      state.id = ++id;
      state.name = action.payload.name;
    },

    updateUser: (state, action: PayloadAction<{ name: string }>) => {
      state.name = action.payload.name;
    },

    removeUser: (state) => {
      state.id = null;
      state.name = "";
    },
  },
});

export const { addUser, updateUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
