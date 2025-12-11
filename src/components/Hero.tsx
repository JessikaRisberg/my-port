import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import '../styles/hero.css';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            <span className="hero-greeting">Hej, jag heter</span>
            <span className="hero-name">Jessika Risberg</span>
          </h1>
          <p className="hero-description">
            Mjukvaruutvecklare med passion för att skapa eleganta lösningar på komplexa problem
          </p>
          <div className="hero-social-links">
            <a
              href="https://github.com/JessikaRisberg"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jessika-risberg/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:jessikarisberg@gmail.com"
              className="hero-social-link"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="hero-scroll-button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 2 } }}
      >
        <ArrowDown size={32} />
      </motion.button>
    </section>
  );
}