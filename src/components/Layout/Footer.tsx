import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Mail, Phone, MapPin, Download } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: Youtube, href: personalInfo.social.youtube, label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{personalInfo.name}</h3>
            <p className="text-gray-400 mb-4">
              {personalInfo.role}
            </p>
            <p className="text-gray-400 text-sm">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <a href={`mailto:${personalInfo.contact.email}`} className="hover:text-white transition-colors">
                  {personalInfo.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <a href={`tel:${personalInfo.contact.phone}`} className="hover:text-white transition-colors">
                  {personalInfo.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>{personalInfo.contact.location}</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-800 dark:bg-gray-700 rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <Download size={16} />
              <span className="ml-2">Download Resume</span>
            </a>

            <button
              onClick={() => window.dispatchEvent(new Event('openHireModal'))}
              className="inline-flex items-center px-4 py-2 border border-gray-700 text-gray-300 rounded-full hover:bg-gray-800 transition-colors"
            >
              <Mail size={16} />
              <span className="ml-2">Hire Me</span>
            </button>
          </div>

          <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;