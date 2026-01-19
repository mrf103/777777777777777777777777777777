import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './layout'

// Import pages (placeholders for now)
const Dashboard = () => <div>Dashboard Page</div>
const Upload = () => <div>Upload Page</div>
const Manuscripts = () => <div>Manuscripts Page</div>

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout currentPageName="Dashboard"><Dashboard /></Layout>} />
      <Route path="/dashboard" element={<Layout currentPageName="Dashboard"><Dashboard /></Layout>} />
      <Route path="/upload" element={<Layout currentPageName="Upload"><Upload /></Layout>} />
      <Route path="/manuscripts" element={<Layout currentPageName="Manuscripts"><Manuscripts /></Layout>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
