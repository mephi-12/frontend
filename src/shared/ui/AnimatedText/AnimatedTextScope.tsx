import { cloneElement, ReactNode } from "react"
import { AnimatedComponentProps } from "./AnimatedText"
import { DEFAULT_INTERVAL } from "./config"

interface Props {
    children: ReactNode | ReactNode[]
    delay?: number
    name?: string
}

type AnimatedTextItem = ReactNode & {
  props: AnimatedComponentProps
}

const asArray = (children: ReactNode | ReactNode[]): ReactNode[] => {
    if (!Array.isArray(children)) {
        return [children]
    }
    return children as ReactNode[]
}
const isAnimatedTextItem = (item: any) => !!item?.props?.text

export const AnimatedTextScope = ({children, delay: scopeDelay = 0, name}: Props) => {
  const items = asArray(children).filter(isAnimatedTextItem) as AnimatedTextItem[]
  let reducedDelay = 0;
  return (
    items.map((item, idx) => {
      const oldDelay = item.props.delay ?? 0
      const interval = item.props.interval ?? DEFAULT_INTERVAL
      const { length } = item.props.text
      const totalDelay = scopeDelay + oldDelay + reducedDelay
      let newProps = {
        ...item.props,
        delay: totalDelay,
      }
      reducedDelay += oldDelay + interval * length
      if (idx == items.length - 1) {
        newProps = {...newProps, id: name}
      }
      return cloneElement(item as any, newProps)
    })
  )
}
