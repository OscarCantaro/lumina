import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductsGrid from "./components/ProductsGrid";
import Testimonials from "./components/Testimonials";
import NewsletterCTA from "./components/NewsletterCTA";
import Footer from "./components/Footer";

export default function PublicPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <ProductsGrid />
      <Testimonials />
      <NewsletterCTA />
      <Footer />
    </>
  );
}
