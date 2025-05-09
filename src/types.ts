export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}

export interface WishlistContextType {
  wishlist: string[];
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}