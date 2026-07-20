import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Notfound from "./pages/Notfound/Notfound";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;