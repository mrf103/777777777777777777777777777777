import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '@/Components/Layout'
import Dashboard from '@/Pages/Dashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/upload" element={<div className="p-8 text-center text-muted-foreground">Upload Page - Coming Soon</div>} />
          <Route path="/manuscripts" element={<div className="p-8 text-center text-muted-foreground">Manuscripts Page - Coming Soon</div>} />
          <Route path="/elite-editor" element={<div className="p-8 text-center text-muted-foreground">Elite Editor - Coming Soon</div>} />
          <Route path="/book-merger" element={<div className="p-8 text-center text-muted-foreground">Book Merger - Coming Soon</div>} />
          <Route path="/cover-designer" element={<div className="p-8 text-center text-muted-foreground">Cover Designer - Coming Soon</div>} />
          <Route path="/settings" element={<div className="p-8 text-center text-muted-foreground">Settings - Coming Soon</div>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
