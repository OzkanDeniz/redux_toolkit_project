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

export default haberSlice.reducer