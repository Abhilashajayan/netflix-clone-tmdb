import { Route, Routes } from "react-router-dom";
import Login from './components/siginin'
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const  App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App