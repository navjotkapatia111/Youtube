import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appslice";
import searchReducer from "./searchSlice";

 const store = configureStore({
    reducer: {
        app: appslice,
        search: searchReducer,
    }
})
export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;