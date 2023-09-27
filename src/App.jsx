import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { TeamIndex } from './cmps/TeamIndex'


import './assets/style/main.scss'
export function App() {

  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} path="/" />
        {/* <Route element={<TeamIndex />} path="/team" /> */}

      </Routes>
    </Router>

  )
}

