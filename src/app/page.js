import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
