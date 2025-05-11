import { Link } from "react-router-dom"
import { AuthWrapper } from "./AuthWrapper"

export const Wrapper = ({children}: any) => {
  return (
    <>
        <main>
            <AuthWrapper>{children}</AuthWrapper>
        </main>
        {/* TODO: переделать на классы */}
        <footer style={{display: 'flex', padding: '20px', justifyContent: 'flex-end'}}>
            <Link to={'/about'}>Разработчики</Link>
        </footer>
    </>
  )
}
