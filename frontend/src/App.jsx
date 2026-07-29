import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Landing from "./pages/Landing/Landing";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Notfound from "./pages/Notfound/Notfound";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"

function App(){

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("App isLoggedIn:", isLoggedIn);
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="*" element={<Notfound />} />
        <Route path="/dashboard" element={
          <ProtectedRoute isLoggedIn = {isLoggedIn}>
            <Dashboard/>
          </ProtectedRoute>
        }/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;