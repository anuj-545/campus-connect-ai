import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }){

    const navigate = useNavigate();

    const handleLogin = () => {
        console.log("Login button clicked");
        setIsLoggedIn(true);
        navigate("/dashboard");
    };

    return(
       <div>
        <h1 style={{color:"red"}}>Login Page</h1>

        <button onClick={handleLogin}>
            CLICK ME
        </button>
       </div>
    );
}
export default Login;