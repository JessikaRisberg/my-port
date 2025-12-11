import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Zap, Users } from 'lucide-react';
import '../styles/about.css';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { icon: Code2, title: 'Utveckling', description: 'Full-stack utveckling med moderna teknologier' },
    { icon: Palette, title: 'Design', description: 'Användarvänliga och estetiska gränssnitt' },
    { icon: Zap, title: 'Prestanda', description: 'Optimerad kod för snabba applikationer' },
    { icon: Users, title: 'Samarbete', description: 'Effektiv teamwork och kommunikation' },
  ];

  const technologies = [
    'JavaScript', 'C/C++', 'React', 'Node.js',
    'Python', 'Azure DevOps', 'C#.NET', 'Docker',
    'Git/ Github', 'REST API', 'Thingsboard.io', 'Next.js', 'HTML/CSS',
    'Java', 'Linux', 'Agile/Scrum'
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="about-title">Om mig</h2>
          <div className="about-divider"></div>

          <div className="about-content">
            <div className="about-text">
              <p>
                Mångsidig och driven mjukvaruutvecklare med fokus på embedded- och IoT-lösningar. Erfaren inom C#, Python, JavaScript och molnteknologier som Azure och Docker.
              </p>
              <p>
                Jag trivs i dynamiska miljöer där jag får utveckla effektiva och skalbara system, och har ett starkt intresse för fullstackutveckling och systemintegration. 
                Jag vill bidra till utvecklingen av hållbara och smarta systemlösningar genom att kombinera mina kunskaper inom frontend och backend för att skapa stabila, 
                skalbara och användarcentrerade system
              </p>
            </div>

            <div>
              <h3 className="about-technologies-title">Teknologier jag arbetar med</h3>
              <div className="about-technologies-list">
                {technologies.map((tech) => (
                  <span key={tech} className="about-technology-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="about-skills">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="about-skill-card"
              >
                <skill.icon className="about-skill-icon" size={32} />
                <h3 className="about-skill-title">{skill.title}</h3>
                <p className="about-skill-description">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}