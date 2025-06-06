import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import AdminPage from "./components/AdminPage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  )
}

export default App
