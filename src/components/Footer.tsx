import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'Residential Design',
      'Commercial Spaces',
      'Design Consultation',
      'Furniture & Decor',
      'Lighting Design',
      'Styling & Staging'
    ],
    company: [
      'About Us',
      'Our Team',
      'Portfolio',
      'Testimonials',
      'Careers',
      'Blog'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 pt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
        >
          {/* Brand and Contact */}
          <motion.div variants={itemVariants}>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold mb-4 cursor-pointer"
            >
              Vistara <span className="text-amber-500">Interiors</span>
            </motion.h3>
            <p className="text-gray-400 mb-6">
              Creating extraordinary interiors that reflect your personality and elevate your lifestyle through innovative design solutions.
            </p>
            <div className="space-y-3">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 cursor-pointer"
              >
                <Phone className="w-5 h-5 text-amber-500" />
                <span className="text-gray-300">+91 98765 43210</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 cursor-pointer"
              >
                <Mail className="w-5 h-5 text-amber-500" />
                <span className="text-gray-300">hello@vistarainteriors.com</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 cursor-pointer"
              >
                <MapPin className="w-5 h-5 text-amber-500" />
                <span className="text-gray-300">123 Design Street, Mumbai</span>
              </motion.div>
            </div>
            <div>
              <h5 className="text-sm font-medium mt-3 mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors duration-300 group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <motion.a
                    href="#"
                    whileHover={{ x: 5, color: "#f59e0b" }}
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company + Social */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <motion.a
                    href="#"
                    whileHover={{ x: 5, color: "#f59e0b" }}
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>

           
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
         <div className="flex justify-center items-center w-full">
  <p className="text-gray-400 text-sm text-center">
    © {currentYear} Vistara Interiors. All rights reserved.
  </p>
</div>

        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
