
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import store from "@/lib/redux/store";

//il reducer serve solo a salvare/aggiornare lo stato

// //user login reducer
// export default function reducer(state={}, action) {
//   switch (action.type) {
//     case actionTypes.USER_ADD:
//       return action.payload;
//     case actionTypes.USER_REMOVE:
//       //return state.filter(item => item.user.id !== action.payload.id)
//       return {};
//       //return null;
//     default:
//       return state;
//   }
// }

let id = 0;

interface User {
  id: number|null;
  name: string;
}

const initialState: User = { id : null, name: '' } ;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
     addUser: (state, action: PayloadAction<{ name: string }>) => {
      // Aggiorna direttamente lo stato con Immer
      state.id = ++id;
      state.name = action.payload.name;
    },

    //removeUser: () => null, // elimina l’utente
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;