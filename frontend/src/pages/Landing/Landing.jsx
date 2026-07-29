import { Link } from "react-router-dom"; 

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";

function Landing({ isLoggedIn, setIsLoggedIn }){
    return(
        <>
            <Navbar
                isLoggedIn = {isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
            />
            <Hero/>
            <Features/>
        </>
    );
}

export default Landing;