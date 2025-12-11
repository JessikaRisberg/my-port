import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import '../styles/contact.css';

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log('Form submitted:', formData);
    alert('Tack för ditt meddelande! Jag återkommer snart.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'jessikarisberg@gmail.com', href: 'mailto:jessikarisberg@gmail.com' },
    { icon: Phone, label: 'Telefon', value: '+46 70 404 68 77', href: 'tel:+46704046877' },
    { icon: MapPin, label: 'Plats', value: 'Tjörn, Sverige' },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/JessikaRisberg' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jessika-risberg/' },
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="contact-title">Kontakt</h2>
          <div className="contact-divider"></div>

          <div className="contact-grid">
            {/* Contact Info */}
            <div>
              <p className="contact-intro">
                Har du ett projekt i åtanke eller vill du bara säga hej? Tveka inte att höra av dig!
              </p>

              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="contact-info-item"
                  >
                    <div className="contact-info-icon-wrapper">
                      <info.icon className="contact-info-icon" size={20} />
                    </div>
                    <div>
                      <p className="contact-info-label">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="contact-info-value">
                          {info.value}
                        </a>
                      ) : (
                        <p className="contact-info-text">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="contact-social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <div className="contact-form-group">
                <label htmlFor="name" className="contact-form-label">
                  Namn
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-form-input"
                  placeholder="Ditt namn"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="email" className="contact-form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-form-input"
                  placeholder="din.email@example.com"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="message" className="contact-form-label">
                  Meddelande
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="contact-form-textarea"
                  placeholder="Ditt meddelande..."
                ></textarea>
              </div>

              <button type="submit" className="contact-form-submit">
                Skicka meddelande
              </button>
            </motion.form>
          </div>

          <div className="contact-footer">
            <p>&copy; 2025 Ditt Namn. Alla rättigheter förbehållna.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}