import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Tools from "./components/Tools";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Tools />
      <Project />
    </div>
  );
}

export default App;
