import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <Header />
      <Hero />
      <ProjectsGrid />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
