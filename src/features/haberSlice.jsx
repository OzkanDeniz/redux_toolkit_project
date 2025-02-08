import { createSlice } from "@reduxjs/toolkit";

export const haberSlice = createSlice({
  name: "haberSlice",
  initialState: {
    haberler: [],
    loading: true,
  },
});
