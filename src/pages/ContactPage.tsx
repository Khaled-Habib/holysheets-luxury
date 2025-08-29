import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '1-800-HOLYSHEETS',
      subtitle: 'Mon-Fri 9AM-6PM PST'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@holysheetsusa.com',
      subtitle: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Store Locations',
      content: 'Nevada & Illinois',
      subtitle: 'Visit our showrooms'
    },
    {
      icon: Clock,
      title: 'Customer Support',
      content: '24/7 Online Support',
      subtitle: 'Live chat available'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-900/80 to-luxury-900/60"></div>
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
            }}
          ></div>
        </div>
        
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-display font-light mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-luxury-100 max-w-2xl mx-auto"
          >
            We're here to help with any questions about our products or services.
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-luxury-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              Contact
              <span className="block text-gradient font-semibold">Information</span>
            </h2>
            <p className="text-xl text-luxury-600 max-w-3xl mx-auto">
              Reach out to us through any of these channels. We're always here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white p-8 luxury-shadow"
              >
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-8 h-8 text-gold-600" />
                </div>
                <h3 className="text-xl font-semibold text-luxury-900 mb-2">{info.title}</h3>
                <p className="text-lg text-luxury-700 mb-2">{info.content}</p>
                <p className="text-sm text-luxury-500">{info.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
                Send Us a
                <span className="block text-gradient font-semibold">Message</span>
              </h2>
              <p className="text-xl text-luxury-600 mb-8 leading-relaxed">
                Have a question about our products? Need help with your order? 
                Fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-luxury-900 mb-1">Email Support</h3>
                    <p className="text-luxury-700">For general inquiries and product questions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-luxury-900 mb-1">Phone Support</h3>
                    <p className="text-luxury-700">For urgent matters and order assistance</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-luxury-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border luxury-border focus:border-gold-400 focus:outline-none transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-luxury-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border luxury-border focus:border-gold-400 focus:outline-none transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-luxury-900 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border luxury-border focus:border-gold-400 focus:outline-none transition-colors duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="order-support">Order Support</option>
                    <option value="returns">Returns & Exchanges</option>
                    <option value="general">General Question</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-luxury-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border luxury-border focus:border-gold-400 focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-luxury-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              Frequently Asked
              <span className="block text-gradient font-semibold">Questions</span>
            </h2>
            <p className="text-xl text-luxury-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our products and services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'What makes HolySheets different from other bed sheets?',
                answer: 'Our sheets are made from premium bamboo viscose blend with microfiber, offering superior softness, breathability, and durability. They feature deep pockets for thick mattresses and are hypo-allergenic.'
              },
              {
                question: 'How do I choose the right size for my mattress?',
                answer: "Measure your mattress thickness and check our size guide. Our deep pockets fit mattresses up to 18\" thick. If you're unsure, contact our customer service for assistance."
              },
              {
                question: 'What is your return policy?',
                answer: "We offer a 100% satisfaction guarantee. If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund or exchange."
              },
              {
                question: 'How do I care for my HolySheets?',
                answer: 'Machine wash in cold water with mild detergent, tumble dry on low heat. Avoid bleach and fabric softeners. Our sheets are designed to maintain their softness and color over time.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 luxury-shadow"
              >
                <h3 className="text-lg font-semibold text-luxury-900 mb-4">{faq.question}</h3>
                <p className="text-luxury-700 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
