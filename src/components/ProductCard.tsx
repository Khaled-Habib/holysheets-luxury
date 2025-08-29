import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  colors?: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  colors = []
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-white luxury-shadow hover:luxury-shadow-lg transition-all duration-300">
        {/* Product Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Overlay with actions - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-black/20 flex items-center justify-center md:group-hover:flex"
          >
            <div className="flex space-x-2 p-2">
              <button className="w-12 h-12 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center hover:bg-luxury-900 hover:text-white transition-colors duration-200 shadow-lg">
                <Eye className="w-5 h-5 md:w-4 md:h-4" />
              </button>
              <button 
                className={`w-12 h-12 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg ${
                  isWishlisted 
                    ? 'bg-red-500 text-white' 
                    : 'bg-white hover:bg-luxury-900 hover:text-white'
                }`}
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                <Heart className={`w-5 h-5 md:w-4 md:h-4 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
              <button className="w-12 h-12 md:w-10 md:h-10 bg-gold-500 text-white rounded-full flex items-center justify-center hover:bg-gold-600 transition-colors duration-200 shadow-lg">
                <ShoppingBag className="w-5 h-5 md:w-4 md:h-4" />
              </button>
            </div>
          </motion.div>

          {/* Discount badge */}
          {discount > 0 && (
            <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
              -{discount}%
            </div>
          )}

          {/* Category badge */}
          <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/90 text-luxury-900 text-xs font-medium px-2 py-1 rounded">
            {category}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-3 md:p-4">
          <Link to={`/product/${id}`} className="block">
            <h3 className="font-medium text-luxury-900 mb-2 group-hover:text-gold-600 transition-colors duration-200 text-sm md:text-base line-clamp-2">
              {name}
            </h3>
          </Link>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-base md:text-lg font-semibold text-luxury-900">
                ${price}
              </span>
              {originalPrice && (
                <span className="text-xs md:text-sm text-luxury-400 line-through">
                  ${originalPrice}
                </span>
              )}
            </div>
            
            {/* Color options */}
            {colors.length > 0 && (
              <div className="flex space-x-1">
                {colors.slice(0, 3).map((color, index) => (
                  <div
                    key={index}
                    className="w-3 h-3 md:w-4 md:h-4 rounded-full border border-luxury-200"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
                {colors.length > 3 && (
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border border-luxury-200 bg-luxury-100 text-xs flex items-center justify-center">
                    +{colors.length - 3}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
