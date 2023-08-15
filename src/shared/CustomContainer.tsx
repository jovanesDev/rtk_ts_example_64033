type Props = {
  children: JSX.Element | JSX.Element[]
  className: string
}

const CustomContainer = (props: Props) => {
  return <div className={props.className || ""}>{props.children}</div>
}

export default CustomContainer
