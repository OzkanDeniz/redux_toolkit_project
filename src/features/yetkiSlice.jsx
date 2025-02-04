import { createSlice } from "@reduxjs/toolkit";

const yetkiSlice = createSlice({
  name: "yetkiSlice",
  initialState: {
    email: "",
    password: "",
  },
  reducer: {
    kullaniciOlustur: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    kullaniciSil: () => {},
  },
});

export const { kullaniciOlustur, kullaniciSil } = yetkiSlice.actions;
export default yetkiSlice.reducer;
