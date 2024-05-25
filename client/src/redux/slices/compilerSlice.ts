import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CompilerSliceStateType{
    html:string;
    css:string;
    javascript:string;
    currentLanguage:"html" | "css" | "javascript";
}
const initialState:CompilerSliceStateType={
    html:"",
    css:"",
    javascript:"",
    currentLanguage:"html",
};

const compilerSlice = createSlice({
    name:"compilerSlice",
    initialState,
    reducers:{
        updateCurrentLanguage:
        (state,
        action: PayloadAction<CompilerSliceStateType["currentLanguage"]>)=>{
            state.currentLanguage = action.payload;
        },
    },
});
// isse ye hua ki hum jab bhi payload pass karenge to usse initialState update ho jayegi
export default compilerSlice.reducer;
export const {updateCurrentLanguage} = compilerSlice.actions;