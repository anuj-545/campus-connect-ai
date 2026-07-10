import Navbar from"./components/Navbar/Navbar";
import Hero from"./components/Hero/Hero";
import "./App.css";
import FeatureCard from "./components/FeatureCard/FeatureCard";
import Features from "./components/Features/Features";
import Counter from "./components/Counter/Counter";
import Nameform from "./components/Nameform/Nameform";
import SubmitForm from "./components/SubmitForm/SubmitForm";

function App(){
  return(
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <Counter/>
      <Nameform/>
      <SubmitForm/>
    </>
  );
}

export default App;