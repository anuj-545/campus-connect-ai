import Navbar from"./components/Navbar/Navbar";
import Hero from"./components/Hero/Hero";
import "./App.css";
import FeatureCard from "./components/FeatureCard/FeatureCard";
import Features from "./components/Features/Features";
import Input from "./components/Input/Input";


function App(){
  return(
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <Input/>
    </>
  );
}

export default App;