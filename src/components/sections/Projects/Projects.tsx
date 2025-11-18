import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../../data/portfolio';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';
import ProjectModal from './ProjectModal';
import { Project } from '../../../data/portfolio';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('featured');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, isIntersecting } = useIntersectionObserver();

  const categories = ['featured', 'all', ...new Set(projects.map(p => p.category))];
  const filteredProjects = selectedCategory === 'all'
    ? projects
    : selectedCategory === 'featured'
      ? projects.filter(p => p.featured).slice(0, 5)
      : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my work across web development, mobile apps, and enterprise solutions
          </p>
        </motion.div>

        <ProjectFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                project={project}
                onSelect={setSelectedProject}
              />
            </motion.div>
          ))}
        </div>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;