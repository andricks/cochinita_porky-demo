import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PromoSection from "./components/PromoSection.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <PromoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
