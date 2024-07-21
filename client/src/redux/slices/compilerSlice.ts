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
        css: `
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 400px;
    margin: 50px auto;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

h1 {
    text-align: center;
    color: #333;
}

.input-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

#todo-input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

#add-button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
}

#add-button:hover {
    background-color: #0056b3;
}

#todo-list {
    list-style-type: none;
    padding: 0;
}

.todo-item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #f9f9f9;
    border-bottom: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 10px;
}

.todo-item button {
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px 10px;
}

.todo-item button:hover {
    background-color: darkred;
}
        
        `,
        javascript: `
document.getElementById('add-button').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const todoList = document.getElementById('todo-list');

        const listItem = document.createElement('li');
        listItem.className = 'todo-item';

        const itemText = document.createElement('span');
        itemText.textContent = todoText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(listItem);
        });

        listItem.appendChild(itemText);
        listItem.appendChild(deleteButton);

        todoList.appendChild(listItem);
        todoInput.value = '';
    }
});
        `,
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