import Header from '../components/Header';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import ImageGallery from '../components/ImageGallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Slider />
        <Products />
        <Testimonials />
        <ImageGallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
