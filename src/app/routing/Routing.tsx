import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { routes } from './routes'
import { Wrapper } from './Wrapper'


export const Routing = () => (
  <Router future={{v7_startTransition: true}}>
      <Routes>
      {routes.map(({ element: Component, url }) => (
        <Route key={url} path={url} element={
          <Wrapper><Component /></Wrapper>
        } />
      ))}
      <Route path='*' element={<Navigate to="/signin" replace />}/>
    </Routes>
  </Router>
)
