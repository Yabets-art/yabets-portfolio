import React from 'react';
import { motion } from 'framer-motion';

interface ProjectFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-full font-medium transition-all ${
            selectedCategory === category
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {category === 'all' ? 'All Projects' : category}
        </motion.button>
      ))}
    </div>
  );
};

export default ProjectFilter;