/** @format */
import katex from "katex"
import { type } from "os"
import { KatexSpanProps } from "./KatexSpan"
type props = {
  children: string
}
const Math = ({ children }: props) => {
  const x = children as string
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(children),
      }}
    />
  )
}
export default Math
