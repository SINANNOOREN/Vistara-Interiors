
import { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'Modern Minimalist Home',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A sleek and sophisticated living space with clean lines and natural materials.'
    },
    {
      id: 2,
      title: 'Luxury Hotel Suite',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Elegant hospitality design featuring rich textures and warm lighting.'
    },
    {
      id: 3,
      title: 'Contemporary Kitchen',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Functional and beautiful kitchen design with premium finishes.'
    },
    {
      id: 4,
      title: 'Executive Office',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Professional workspace designed for productivity and style.'
    },
    {
      id: 5,
      title: 'Cozy Bedroom Retreat',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Tranquil bedroom design promoting rest and relaxation.'
    },
    {
      id: 6,
      title: 'Boutique Restaurant',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Intimate dining experience with thoughtful lighting and decor.'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleViewDetails = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="portfolio" 
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-amber-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our collection of thoughtfully designed spaces that blend functionality with aesthetic excellence.
          </p>
        </motion.div>

      

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                layout
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-64 object-cover"
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                  >
                    <motion.div 
                      initial={{ scale: 0, rotate: -180 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute bottom-4 right-4"
                    >
                      <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </motion.div>
                  </motion.div>
                </div>
                <div className="p-6">
                  <motion.h3 
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors"
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <motion.button 
                    onClick={() => handleViewDetails(project.id)}
                    whileHover={{ x: 5 }}
                    className="flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors group/btn"
                  >
                    View Details
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
