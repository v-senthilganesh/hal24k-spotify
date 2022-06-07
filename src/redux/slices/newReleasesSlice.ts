import axios from "../../axios";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetNewReleases = createAsyncThunk(
  "newReleases/fetchNewReleases",
  async () => await axios.get("/browse/new-releases")
);

type newReleasesState = {
  newReleases: [];
  error: any;
};
export const initialState: newReleasesState = {
  newReleases: [],
  error: null,
};

export const postSlice = createSlice({
  name: "newReleases",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [GetNewReleases.fulfilled.type]: (state, action) => {
      state.newReleases = action.payload.data;
    },
    [GetNewReleases.rejected.type]: (state, action) => {
      state.newReleases = [];
    },
  },
});
export default postSlice.reducer;
