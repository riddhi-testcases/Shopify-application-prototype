import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { useWishlist } from '../context/WishlistContext';
import { products } from '../data/products';

export function Wishlist() {
  const { wishlist } = useWishlist();
  const wishlistProducts = products.filter((product) => wishlist.includes(product.id));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
      {wishlistProducts.length === 0 ? (
        <p className="text-gray-500 text-center">Your wishlist is empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}