import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Upload from './pages/Upload'
import Explain from './pages/Explain'
import Parent from './pages/Parent'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/explain/:id" element={<Explain />} />
      <Route path="/parent" element={<Parent />} />
      <Route path="/explain/demo" element={<Explain />} />
    </Routes>
  )
}

export default App