import { Navigate } from "react-router-dom";

function ProtectedRoute({isLoggedIn, children}){

    console.log("ProtectedRoute isLoggedIn:", isLoggedIn);
    
    if(isLoggedIn){
        return children;
    }

    return <Navigate to="/login"/>
}

export default ProtectedRoute;
