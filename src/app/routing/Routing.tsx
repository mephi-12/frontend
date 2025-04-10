import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'

export const Routing = () => (
  <Router>
      <Routes>
      {routes.map(({ element: Component, url }) => (
        <Route key={url} path={url} element={<Component />} />
      ))}
    </Routes>
  </Router>
)
