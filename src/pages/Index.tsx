
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import About from "@/components/About";

import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
     
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
