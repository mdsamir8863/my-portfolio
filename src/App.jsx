import HeroBanner from "./components/HeroBanner";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
 { const element = document.getElementById("root");
  element.scrollLeft += 0;
  element.scrollRight += 0;}
  return (
    <div className="App">
      <HeroBanner />
      <AboutMe />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
