import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import { AuthWrapper } from './AuthWrapper'


export const Routing = () => (
  <Router future={{v7_startTransition: true}}>
      <Routes>
      {routes.map(({ element: Component, url }) => (
        <Route key={url} path={url} element={<AuthWrapper><Component /></AuthWrapper>} />
      ))}
    </Routes>
  </Router>
)
