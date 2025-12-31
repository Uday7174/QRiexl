import React from "react";
import Header from "./components/Header";
import Home from "./components/home";
import About from "./components/About";
import FAQ from "./components/FAQ's";
import Footer from "./components/Footer";
import "./CSS/Animations.css";



function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
