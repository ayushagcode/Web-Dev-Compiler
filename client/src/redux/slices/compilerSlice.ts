import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CompilerSliceStateType {
    fullCode: {
        html: string;
        css: string;
        javascript: string;
    }
    currentLanguage: "html" | "css" | "javascript";
}
const initialState: CompilerSliceStateType = {
    fullCode: {
        html: 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>To-Do List</h1>
        <div class="input-group">
            <input type="text" id="todo-input" placeholder="Add a new task...">
            <button id="add-button">Add</button>
        </div>
        <ul id="todo-list"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>
`,
        css: "this is CSS code",
        javascript: "this is JS code",
    },
    currentLanguage: "html",
};

const compilerSlice = createSlice({
    name: "compilerSlice",
    initialState,
    reducers: {
        updateCurrentLanguage:
            (state,
                action: PayloadAction<CompilerSliceStateType["currentLanguage"]>
            ) => {
                state.currentLanguage = action.payload;
            },
        updateCodeValue: (
            state,
            action: PayloadAction<string>) => {
                state.fullCode[state.currentLanguage] = action.payload; 
        },
    },
});
// isse ye hua ki hum jab bhi payload pass karenge to usse initialState update ho jayegi
export default compilerSlice.reducer;
export const { updateCurrentLanguage, updateCodeValue } = compilerSlice.actions;