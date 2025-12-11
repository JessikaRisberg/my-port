import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap } from 'lucide-react';
import '../styles/experience.css';

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const workExperience = [
    {
      title: 'IT-Konsult',
      company: 'GetIT Nordic AB',
      period: '2023 - Nuvarande',
      description: 'Leder utvecklingen av företagets huvudprodukt. Arbetar med React, TypeScript och Node.js. Mentorskap av juniora utvecklare.',
    },
    {
      title: 'Fullstack-utvecklare',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Utvecklade webbapplikationer för olika kunder inom e-handel och fintech. Stack: React, Vue.js, Python, PostgreSQL.',
    },
    {
      title: 'Frontend-utvecklare',
      company: 'Startup Ventures',
      period: '2018 - 2020',
      description: 'Byggde responsiva användargränssnitt och implementerade designsystem. Fokus på prestanda och tillgänglighet.',
    },
  ];

  const education = [
    {
      degree: 'Master i Datavetenskap',
      school: 'Tekniska Högskolan',
      period: '2016 - 2018',
      description: 'Specialisering inom mjukvaruutveckling och artificiell intelligens.',
    },
    {
      degree: 'Kandidat i Datavetenskap',
      school: 'Tekniska Högskolan',
      period: '2013 - 2016',
      description: 'Grundläggande utbildning i programmering, algoritmer och datastrukturer.',
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="experience-title">Erfarenhet</h2>
          <div className="experience-divider"></div>

          <div className="experience-grid">
            {/* Work Experience */}
            <div>
              <div className="experience-section-header">
                <Briefcase className="experience-section-icon" size={28} />
                <h3 className="experience-section-title">Arbetslivserfarenhet</h3>
              </div>

              <div className="experience-items">
                {workExperience.map((job, index) => (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="experience-item"
                  >
                    <div className="experience-item-dot"></div>
                    <div className="experience-item-header">
                      <h4 className="experience-item-title">{job.title}</h4>
                      <p className="experience-item-company">{job.company}</p>
                      <p className="experience-item-period">{job.period}</p>
                    </div>
                    <p className="experience-item-description">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="experience-section-header">
                <GraduationCap className="experience-section-icon" size={28} />
                <h3 className="experience-section-title">Utbildning</h3>
              </div>

              <div className="experience-items">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className="experience-item"
                  >
                    <div className="experience-item-dot"></div>
                    <div className="experience-item-header">
                      <h4 className="experience-item-title">{edu.degree}</h4>
                      <p className="experience-item-company">{edu.school}</p>
                      <p className="experience-item-period">{edu.period}</p>
                    </div>
                    <p className="experience-item-description">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}