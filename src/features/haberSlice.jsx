import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getData =  createAsyncThunk('haberSlice/getData', async()=>{
    await axios("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=81a4163ea7eb4bccb489151972100adb")
})
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

export const {clearHaber} = haberSlice.actions
export default haberSlice.reducer