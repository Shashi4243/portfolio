import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Query from "./components/Query";
import WhyHireMe from "./components/WhyHireMe";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <WhyHireMe />
      <Projects />
      <Query />        {/* ← YAHAN WAPAS ADD */}
      <Contact />
    </>
  );
}


