import React from "react";
import CodeMirror from "@uiw/react-codemirror";
// import {javascript} from "@codemirror/lang-javascript";
import { tags as t } from '@lezer/highlight';
import { draculaInit } from '@uiw/codemirror-theme-dracula';
import { loadLanguage} from '@uiw/codemirror-extensions-langs'
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";
import { updateCodeValue } from "@/redux/slices/compilerSlice";

export default function CodeEditor() {
  const currentLanguage = useSelector(
    (state:RootState) => state.compilerSlice.currentLanguage
  );
const fullCode = useSelector(
  (state: RootState) => state.compilerSlice.fullCode
);
  const dispatch = useDispatch()
    const onChange = React.useCallback((value: string) => {
        // console.log("val:", typeofval);
        // setValue(val);
        dispatch(updateCodeValue (value));
    }, []);

    return (
    <CodeMirror 
    value={fullCode[currentLanguage]} 
    height="100vh" 
    className="code-editor"
    extensions={[loadLanguage(currentLanguage)!]} // ! tells that value cant be empty
    onChange={onChange}
    theme={draculaInit({
        settings: {
          caret: '#c6c6c6',
          fontFamily: 'monospace',
        },
        styles: [
          { tag: t.comment, color: '#6272a4' }],
      })}
     />);
}
