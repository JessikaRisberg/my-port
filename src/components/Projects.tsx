import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import '../styles/projects.css';

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'E-handelsplattform',
      description: 'En fullständig e-handelsplattform byggd med React, Node.js och PostgreSQL. Inkluderar betalningsintegration och användarhantering.',
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjUyOTA5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Mobilapp för produktivitet',
      description: 'Cross-platform mobilapp för att hantera uppgifter och projekt med realtidssynkronisering mellan enheter.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1MjkxMzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React Native', 'Firebase', 'TypeScript'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Dashboard för analytics',
      description: 'Ett interaktivt dashboard för datavisualisering med realtidsuppdateringar och anpassningsbara widgets.',
      image: 'https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NTI1NTY4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Vue.js', 'D3.js', 'WebSocket', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'AI-baserad chattbot',
      description: 'Intelligent chattbot med naturlig språkbehandling för kundsupport, integrerad med företagets befintliga system.',
      image: 'https://images.unsplash.com/photo-1508361727343-ca787442dcd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NTMwNzA5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Python', 'OpenAI', 'Flask', 'Docker'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="projects-title">Projekt</h2>
          <div className="projects-divider"></div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="project-card"
              >
                <div className="project-image-wrapper">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-image-overlay"></div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <Github size={18} />
                      <span>Kod</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}