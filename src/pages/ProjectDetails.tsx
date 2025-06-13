import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Users, Award, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = {
    '1': {
      title: 'Modern Minimalist Home',
      category: 'Residential',
      location: 'Beverly Hills, CA',
      year: '2023',
      client: 'Private Residence',
      area: '3,500 sq ft',
      mainImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      images: [
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      description: 'A stunning modern home that perfectly balances minimalist aesthetics with functional living. This project showcases clean lines, natural materials, and an open-concept design that maximizes natural light throughout the space.',
      features: [
        'Open-concept living and dining area',
        'Floor-to-ceiling windows',
        'Premium hardwood flooring',
        'Custom-built storage solutions',
        'Smart home automation system',
        'Sustainable material selection'
      ]
    },
    '2': {
      title: 'Luxury Hotel Suite',
      category: 'Commercial',
      location: 'Manhattan, NY',
      year: '2023',
      client: 'Boutique Hotel Group',
      area: '800 sq ft',
      mainImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      images: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      description: 'An elegant hotel suite design that creates a luxurious retreat in the heart of Manhattan. Rich textures, warm lighting, and carefully curated furnishings provide guests with an unforgettable experience.',
      features: [
        'Premium Italian marble bathroom',
        'Custom millwork and cabinetry',
        'Designer lighting fixtures',
        'High-end textiles and furnishings',
        'City view optimization',
        'Acoustic sound management'
      ]
    }
  };

  const project = projects[id as keyof typeof projects] || projects['1'];

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % project.images.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(project.images[nextIndex]);
  };

  const handlePrevImage = () => {
    const prevIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(project.images[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[70vh] overflow-hidden"
      >
        <motion.img 
          src={project.mainImage} 
          alt={project.title}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          onClick={() => navigate('/')}
          className="absolute top-8 left-8 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </motion.button>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-12 left-8 text-white max-w-3xl"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="inline-block px-4 py-2 bg-amber-600/90 backdrop-blur-sm rounded-full text-sm font-medium mb-4"
          >
            {project.category}
          </motion.span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl opacity-90">{project.location}</p>
        </motion.div>
      </motion.div>

      {/* Project Info */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Project Details</h3>
              
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Year</p>
                    <p className="font-semibold text-gray-900">{project.year}</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold text-gray-900">{project.location}</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Client</p>
                    <p className="font-semibold text-gray-900">{project.client}</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Area</p>
                    <p className="font-semibold text-gray-900">{project.area}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Image Gallery */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Project Gallery</h3>
          <p className="text-gray-600">Explore the stunning details of this project</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
              onClick={() => handleImageClick(image, index)}
            >
              <div className="relative overflow-hidden rounded-xl aspect-square">
                <img 
                  src={image} 
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Maximize2 className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </motion.button>

            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt="Selected project image"
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 text-white py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create something extraordinary together. Contact us to discuss your vision.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/#contact')}
            className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            Get In Touch
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectDetails;
