import Link from 'next/link';
import RevealOnScroll from './RevealOnScroll';

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '10rem 0', background: 'var(--text-primary)', color: 'var(--bg-primary)', textAlign: 'center' }}>
      <div className="container">
        <RevealOnScroll className="reveal-up">
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Ready to grow your business?
          </h2>
        </RevealOnScroll>
        <RevealOnScroll className="reveal-up" delay={100}>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 3.5rem', lineHeight: 1.6 }}>
            Join thousands of successful traders who use tradeCommerce to scale their operations globally.
          </p>
        </RevealOnScroll>
        <RevealOnScroll className="reveal-up" delay={200}>
          <Link href="/contact" className="btn btn-primary" style={{ 
            background: 'var(--bg-primary)', 
            color: 'var(--text-primary)', 
            padding: '1.25rem 4rem',
            fontSize: '1.125rem',
            fontWeight: 700,
            borderRadius: '8px'
          }}>
            Contact Us
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
