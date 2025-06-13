import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    access_key: 'f6b38ddc-cae8-4d66-bdfc-6c274373d645', // Replace with your Web3Forms access key
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: '',
          access_key: 'YOUR_ACCESS_KEY',
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-10 flex flex-col items-center">
      {/* Top Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center  mb-10"
      >
      Get In  <span className='text-orange-500'>Touch</span>
      </motion.h1>

      {/* Contact Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl flex flex-col md:flex-row w-full max-w-6xl overflow-hidden"
      >
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:w-1/2 w-full bg-gradient-to-b from-orange-600 to-orange-400 text-white p-10 flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span>contact@yourcompany.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <span>Malappuram, Kerala, India</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:w-1/2 w-full bg-white dark:bg-gray-900 p-10"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="access_key" value={formData.access_key} />
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 px-2 py-2 bg-transparent text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 px-2 py-2 bg-transparent text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 px-2 py-2 bg-transparent text-gray-900 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md w-full sm:w-auto transition-all"
            >
              Send Message
            </button>
            {success && (
              <p className="text-green-600 mt-3 text-sm">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
