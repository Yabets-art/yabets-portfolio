import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../../data/portfolio';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
      onClick={() => onSelect(project)}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex space-x-2">
              {project.githubUrl && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.githubUrl, '_blank');
                  }}
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  <Github size={16} className="text-white" />
                </motion.button>
              )}
              {project.liveUrl && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.liveUrl, '_blank');
                  }}
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  <ExternalLink size={16} className="text-white" />
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {project.category}
          </span>
          {project.featured && (
            <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;