import { createSlice } from "@reduxjs/toolkit";

export const haberSlice = createSlice({
  name: "haberSlice",
  initialState: {
    haberler: [],
    loading: true,
  },
  reducers:{
    clearHaber:()=>{

    }
  },
  extraReducers:()=>{

  }
});

export const {} = haberSlice.actions
export default haberSlice.reducer