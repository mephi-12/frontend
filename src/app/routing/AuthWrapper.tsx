import { getUserInfo } from "@shared/utils/getUserInfo"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const AuthWrapper = ({children}: {children?: React.ReactNode}) => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!getUserInfo()) {
    //   navigate('/signin')
    }
  }, [])
  return children
}
