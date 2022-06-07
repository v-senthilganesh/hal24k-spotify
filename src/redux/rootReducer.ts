import { combineReducers } from "@reduxjs/toolkit";

// Reducers
import newReleasesReducer from "./slices/newReleasesSlice";

const rootReducer = combineReducers({
  newReleases: newReleasesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
