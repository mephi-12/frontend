import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { routes } from './routes'
import { AuthWrapper } from './AuthWrapper'
import { AuthPage } from '@pages/auth'


export const Routing = () => (
  <Router future={{v7_startTransition: true}}>
      <Routes>
      {routes.map(({ element: Component, url }) => (
        <Route key={url} path={url} element={<AuthWrapper><Component /></AuthWrapper>} />
      ))}
      <Route path='*' element={<Navigate to="/signin" replace />}/>
    </Routes>
  </Router>
)
