import './App.css';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Testimonials from './components/Testemonials/Testemonial';

function App() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Projects/>
   <Skills/>
   <Testimonials/>
   <Contact/>
   <Footer/>
   </>
  );
}

export default App;
