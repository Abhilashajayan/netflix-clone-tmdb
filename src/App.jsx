import { Route, Routes } from "react-router-dom";
import Login from './components/siginin'
import Navbar from "./components/Navbar";
import Home from "./components/MainPage";
import LandPage from "./components/Landingpage";
import { AuthProvider } from "./context/authContext";
import ProtectedRoute from "./context/protectRoute";


const  App = () => {
  return (
    <div>
      <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProtectedRoute> <Home /></ProtectedRoute>} />
        <Route path="/Home" element={<LandPage />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      </AuthProvider>
    </div>
  )
}

export default App