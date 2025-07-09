import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutPages from "./pages/AboutPages";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
const App = () => {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home onNavigate={setActivePage} />; // ✅ Pastikan props dikirim
      case "about":
        return <AboutPages />;
      case "resume":
        return <Resume />;
        case "skills":
          return <Skills />
      case "contact":
        return <Contact />;
      default:
        return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <>
      <Header onNavigate={setActivePage} />
      {renderPage()}
    </>
  );
};

export default App;
