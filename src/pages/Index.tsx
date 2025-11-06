import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WatchCompatibility from "@/components/WatchCompatibility";
import WhyChooseUs from "@/components/WhyChooseUs";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import AppDownload from "@/components/AppDownload";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WatchCompatibility />
      <WhyChooseUs />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default Index;
