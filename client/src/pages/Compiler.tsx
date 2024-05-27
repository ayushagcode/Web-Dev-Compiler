import CodeEditor from "@/components/CodeEditor"
import HelperHeader from "@/components/HelperHeader"
import RenderCode from "@/components/RenderCode"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function Compiler() {
  return (
    <ResizablePanelGroup direction="horizontal" className="">
      <ResizablePanel className="h-[calc(100dvh-60px)] min-w-[300px]" defaultSize={50}>
      <HelperHeader/>
      <CodeEditor/>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className="h-[calc(100dvh-60px)] min-w-[300px]" defaultSize={50}>
        <RenderCode/>
        right side
          </ResizablePanel>
    </ResizablePanelGroup>
  )
}

