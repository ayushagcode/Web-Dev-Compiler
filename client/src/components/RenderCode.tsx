import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"

export default function RenderCode() {
    const fullCode = useSelector(
        (state: RootState) => state.compilerSlice.fullCode
    );
    const combinedCode = `<html><style>${fullCode.css}</style><body>${fullCode.html}</body><script>${fullCode.javascript}</script></html>`;

    const iframeCode =`data:text/html;charset=utf-8,${encodeURIComponent(
        combinedCode
    )}`;
  return (
    <div className="bg-white border-2 border-red-500 h-[calc(1000dvh-60px)]">
        {/* if we want to render the code on other side of the page then 
        we can do it with the help of iframe */}
      <iframe className="w-full h-full" src={iframeCode}/>
    </div>
  )
}
