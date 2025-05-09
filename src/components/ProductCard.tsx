import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useWishlist } from '../context/WishlistContext';

interface ProductCardProps {
  product: Product;
  showMoveToCart?: boolean;
}

export function ProductCard({ product, showMoveToCart }: ProductCardProps) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">${product.price}</span>
          <div className="flex gap-2">
            {showMoveToCart ? (
              <>
                <button 
                  onClick={() => removeFromWishlist(product.id)}
                  className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                >
                  <Heart className="w-5 h-5" />
                  Remove
                </button>
                <button 
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Move to Cart
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => inWishlist ? removeFromWishlist(product.id) : addToWishlist(product.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded ${
                    inWishlist 
                      ? 'bg-red-100 text-red-500 hover:bg-red-200' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } transition-colors`}
                >
                  <Heart className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} />
                  {inWishlist ? 'Saved' : 'Save for Later'}
                </button>
                <button 
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
