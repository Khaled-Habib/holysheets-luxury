import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const navigation = [
    { name: 'Shop', href: '/shop' },
    { name: 'HolySheets', href: '/shop?category=sheets' },
    { name: 'HolyGrails', href: '/shop?category=grails' },
    { name: 'Pillows', href: '/shop?category=pillows' },
    { name: 'Mattresses', href: '/shop?category=mattresses' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white luxury-border-b sticky top-0 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl font-display font-semibold text-luxury-900">
                HolySheets
              </h1>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-luxury-700 hover:text-luxury-900 font-medium transition-colors duration-200 text-sm uppercase tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-luxury-100 rounded-full transition-colors duration-200">
              <Search className="w-5 h-5 text-luxury-700" />
            </button>
            
            <button className="p-2 hover:bg-luxury-100 rounded-full transition-colors duration-200">
              <User className="w-5 h-5 text-luxury-700" />
            </button>

            <Link
              to="/cart"
              className="relative p-2 hover:bg-luxury-100 rounded-full transition-colors duration-200"
            >
              <ShoppingBag className="w-5 h-5 text-luxury-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 hover:bg-luxury-100 rounded-full transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-luxury-700" />
              ) : (
                <Menu className="w-5 h-5 text-luxury-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t luxury-border"
          >
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-2 text-luxury-700 hover:bg-luxury-50 hover:text-luxury-900 transition-colors duration-200 text-sm uppercase tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
