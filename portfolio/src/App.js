import './App.css';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Projects/>
   <Skills/>
   <Contact/>
   </>
  );
}

export default App;
