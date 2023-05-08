import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  const [showContact, setShowContact] = useState(false);
  const handleContactVisibility = (e) => {
    e.stopPropagation();
    showContact ? setShowContact(false) : setShowContact(true);
    console.log(showContact);
  };
  useEffect(() => {
    document.getElementById("Contact").style.display = showContact
      ? "block"
      : "none";
  }, [showContact]);
  return (
    <div className="App">
      <Header />
      <Contact onChangeContactStatus={handleContactVisibility} />
      <SideBar />
      <Hero onChangeContactStatus={handleContactVisibility} />
      <About />
      <Tools />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
