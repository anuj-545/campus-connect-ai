import Navbar from"./components/Navbar/Navbar";
import Hero from"./components/Hero/Hero";
import "./App.css";
import FeatureCard from "./components/FeatureCard/FeatureCard";
import Features from "./components/Features/Features";
import Counter from "./components/Counter/Counter";

function App(){
  return(
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <Counter/>
    </>
  );
}

export default App;