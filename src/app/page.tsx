import Header from '../components/Header';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import Services from '../components/Services';
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
        <Services />
        <Testimonials />
        <ImageGallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
