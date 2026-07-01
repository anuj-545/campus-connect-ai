import "./Navbar.css";

function Navbar() {
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
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign Up</button>
        </div>
    </nav>
  );
}

export default Navbar