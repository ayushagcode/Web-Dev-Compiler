import { configureStore } from "@reduxjs/toolkit";
import compilerSlice from "./slices/compilerSlice";

export const store = configureStore({
    reducer:{
        compilerSlice,
    },
});
// ye jo niche likha hua function hai usse ye pta chal jayega ki store mein kya kya likha hua hai
export type RootState = ReturnType<typeof store.getState>;