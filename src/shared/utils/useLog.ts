import { useEffect } from "react"

export const useLog = function(...v: any[]) {
  useEffect(() => {
    console.log(...v)
  }, [...v])
}
