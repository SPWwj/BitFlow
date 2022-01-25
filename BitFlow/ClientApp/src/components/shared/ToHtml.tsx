/** @format */
type props = {
  children: string
}
const ToHtml = ({ children }: props) => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: children,
      }}
    />
  )
}
export default ToHtml
