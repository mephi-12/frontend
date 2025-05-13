import { http } from "@shared/api/instance"
import { getUserInfo } from "@shared/utils/getUserInfo"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const tryAddGroup = async () => {
  await http.put('/users/me/groups?group=Б23-544')
  // const groups = await http.get('/users/groups')
}

export const AuthWrapper = ({children}: {children?: React.ReactNode}) => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!getUserInfo()) {
      navigate('/signin')
    } else {
      tryAddGroup()
    }
  }, [])
  return children
}
