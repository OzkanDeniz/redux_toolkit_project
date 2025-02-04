import { createSlice } from "@reduxjs/toolkit";

const yetkiSlice = createSlice({
  name: "yetkiSlice",
  initialState: {
    email: "",
    password: "",
  },
  reducer: {
    kullaniciOlustur: () => {

    },
    kullaniciSil: () => {

    },
  },
});

export default yetkiSlice.reducer