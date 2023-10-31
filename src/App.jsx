import { Route, Routes } from "react-router-dom";
import Login from './components/siginin'
import Navbar from "./components/Navbar";
import Home from "./components/MainPage";
import Mains from "./components/Main";

const  App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Mains />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App