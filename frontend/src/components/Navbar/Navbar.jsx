import "./Navbar.css";
import {useState} from "react";

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
            <button className="login-btn" onClick={handleLogin}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>
            <button className="signup-btn">Sign Up</button>
        </div>
    </nav>
  );
}

export default Navbar