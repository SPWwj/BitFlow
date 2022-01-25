/** @format */

import katex from "katex"
export type KatexSpanProps = {
  text: string
}
const KatexSpan = ({ text }: KatexSpanProps) => {
  function convertMath(content: string) {
    const openDelimiter = "<Math>"
    const endDelimiter = "</Math>"
    let result: JSX.Element[] = []
    let index: number = 0
    while (content.indexOf(openDelimiter) != -1) {
      const preStr = content.substring(0, content.indexOf(openDelimiter))
      content = content.substring(
        content.indexOf(openDelimiter) + openDelimiter.length
      )
      const mathStr = content.substring(0, content.indexOf(endDelimiter))
      const restStr = content.substring(
        content.indexOf(endDelimiter) + endDelimiter.length
      )
      content = restStr
      result.push(
        <span
          key={index++}
          dangerouslySetInnerHTML={{
            __html: preStr,
          }}
        />
      )
      result.push(
        <span
          key={index++}
          dangerouslySetInnerHTML={{
            __html: katex.renderToString(mathStr),
          }}
        />
      )
    }

    result.push(
      <span key={index} dangerouslySetInnerHTML={{ __html: content }} />
    )
    return result
  }

  return <div>{convertMath(text)}</div>
}
export default KatexSpan
