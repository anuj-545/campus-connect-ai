import "./Navbar.css";
import {useState} from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

  return (
    <nav className="Navbar">
        <div className="logo">
            <h2>CampusConnect AI</h2>
        </div>

        <ul className="nav-links">
            <li>Home</li>

            <li>Events</li>
            <li>Notes</li>
            <li>AI Assistant</li>
            <li>About</li>
        </ul>

        <div className="auth-buttons">
            {isLoggedIn ? (<button className = "login-btn" onClick={handleLogin}>Logout</button>):(<Link to="/login"><button className="login-btn">Login</button></Link>)}
            <Link to="/signup"><button className="signup-btn">Sign Up</button></Link>
        </div>
    </nav>
  );
}

export default Navbar