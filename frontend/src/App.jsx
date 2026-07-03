import Navbar from"./components/Navbar/Navbar";
import Hero from"./components/Hero/Hero";
import "./App.css";
import FeatureCard from "./components/FeatureCard/FeatureCard";
import Features from "./components/Features/Features";

function App(){
  return(
    <>
      <Navbar/>
      <Hero/>
      <Features/>
    </>
  );
}

export default App;