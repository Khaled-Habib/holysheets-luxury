import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'HolySheets', href: '/shop?category=sheets' },
      { name: 'HolyGrails', href: '/shop?category=grails' },
      { name: 'Pillows', href: '/shop?category=pillows' },
      { name: 'Mattresses', href: '/shop?category=mattresses' },
      { name: 'Massagers', href: '/shop?category=massagers' },
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Shipping Info', href: '/shipping' },
      { name: 'Returns', href: '/returns' },
      { name: 'Size Guide', href: '/size-guide' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Story', href: '/story' },
      { name: 'Press & Media', href: '/press' },
      { name: 'Careers', href: '/careers' },
      { name: 'Become a Franchisee', href: '/franchise' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Accessibility', href: '/accessibility' },
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
  ];

  return (
    <footer className="bg-luxury-900 text-white">
      {/* Main Footer Content */}
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <h3 className="text-2xl font-display font-semibold text-white">
                HolySheets
              </h3>
            </Link>
            <p className="text-luxury-300 mb-6 leading-relaxed">
              Experience luxury sleep with our premium bamboo bed sheets. 
              Super-soft, breathable, and designed for your best night's sleep.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold-400" />
                <span className="text-luxury-300">1-800-HOLYSHEETS</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold-400" />
                <span className="text-luxury-300">hello@holysheetsusa.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span className="text-luxury-300">Nevada & Illinois Locations</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-luxury-300 hover:text-gold-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-luxury-300 hover:text-gold-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-luxury-300 hover:text-gold-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-luxury-800">
          <div className="max-w-md">
            <h4 className="text-lg font-semibold mb-4 text-white">
              Become a HolySheets Insider
            </h4>
            <p className="text-luxury-300 mb-4 text-sm">
              Sign up for special offers and exclusive updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-luxury-800 border border-luxury-700 text-white placeholder-luxury-400 focus:outline-none focus:border-gold-400 transition-colors duration-200"
              />
              <button className="px-6 py-3 bg-gold-500 text-white hover:bg-gold-600 transition-colors duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-luxury-800">
        <div className="container-max py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-luxury-400 text-sm">
              © {currentYear} HolySheets USA. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-luxury-400 hover:text-gold-400 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 bg-luxury-800 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 text-luxury-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
