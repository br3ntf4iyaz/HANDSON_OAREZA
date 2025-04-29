import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import './index.css'; 

function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-24"> {/* Add padding-top to avoid content under navbar */}
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

