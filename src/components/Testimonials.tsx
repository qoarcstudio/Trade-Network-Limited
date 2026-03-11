"use client"
import { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';
import Placeholder from './Placeholder';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
       text: "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis sit aliquam sit nullam.",
       author: "Brian Clark",
       role: "VP of Marketing",
       avatar: ""
    },
    {
       text: "Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Ac tortor vitae purus faucibus ornare suspendisse.",
       author: "Sarah Jenkins",
       role: "Head of Operations",
       avatar: ""
    },
    {
       text: "Pellentesque diam volutpat commodo sed egestas egestas fringilla. Diam sit amet nisl suscipit adipiscing bibendum est ultricies.",
       author: "Michael Lee",
       role: "Director of Logistics",
       avatar: ""
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section style={{ padding: '8rem 2rem', background: '#ffffff', textAlign: 'center' }}>
      <div className="container flex flex-col items-center">
        
        <RevealOnScroll className="reveal-up">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ color: '#13171a', marginBottom: '1rem', fontSize: '2.5rem', fontWeight: 700 }}>What our clients have to say</h2>
            <p style={{ color: '#697077', maxWidth: '600px', margin: '0 auto', fontSize: '0.875rem' }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis sit aliquam sit nullam.
            </p>
          </div>
        </RevealOnScroll>

        {/* Quote Icon */}
        <RevealOnScroll className="reveal-up" delay={200}>
          <div style={{ color: '#c1c7cd', marginBottom: '2rem' }}>
             <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          </div>
        </RevealOnScroll>

        {/* Slider Area */}
        <div className="flex items-center justify-center flex-col-md gap-md" style={{ width: '100%', maxWidth: '900px' }}>
           
           <RevealOnScroll className="reveal-left" delay={300}>
             <button onClick={prevSlide} style={{ 
                width: '40px', height: '40px', 
                borderRadius: '50%', 
                border: '1px solid #dde1e6', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: 'transparent',
                color: '#697077',
                cursor: 'pointer',
                flexShrink: 0
             }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
             </button>
           </RevealOnScroll>

           <div style={{ flex: 1, minHeight: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <RevealOnScroll className="reveal-up" delay={400}>
                <p className="animate-fade-in" key={`text-${currentSlide}`} style={{ 
                   fontSize: '1.25rem', 
                   color: '#13171a', 
                   fontWeight: 500, 
                   lineHeight: 1.6,
                   marginBottom: '2rem',
                   maxWidth: '800px'
                }}>
                   {testimonials[currentSlide].text}
                </p>
              </RevealOnScroll>
              
              <RevealOnScroll className="reveal-up" delay={500}>
                <div className="animate-fade-in delay-100" key={`author-${currentSlide}`} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Placeholder width="40px" height="40px" className="rounded-full" />
                   <div style={{ textAlign: 'left' }}>
                      <div style={{ fontWeight: 700, color: '#5b6b80', fontSize: '0.875rem' }}>{testimonials[currentSlide].author}</div>
                      <div style={{ color: '#b3bed1', fontSize: '0.875rem' }}>{testimonials[currentSlide].role}</div>
                   </div>
                </div>
              </RevealOnScroll>
           </div>

           <RevealOnScroll className="reveal-right" delay={300}>
                <button onClick={nextSlide} style={{ 
                   width: '40px', height: '40px', 
                   borderRadius: '50%', 
                   backgroundColor: '#697077', 
                   display: 'flex', alignItems: 'center', justifyContent: 'center',
                   border: 'none',
                   color: 'white',
                   cursor: 'pointer',
                   flexShrink: 0
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
           </RevealOnScroll>

        </div>

      </div>
    </section>
  );
}
