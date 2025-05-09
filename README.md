# Shopify Wishlist App

A Shopify embedded app that adds "Save for Later / Wishlist" functionality to your storefront.

## Features

- Product listing with "Add to Cart" and "Save for Later" functionality
- Persistent wishlist using localStorage
- Dedicated wishlist page with "Remove" and "Move to Cart" actions
- Built with Shopify Polaris components for consistent UI/UX
- Fully responsive design


## Implementation Details

### Persistence
The app uses localStorage for wishlist persistence. This approach was chosen for simplicity and immediate feedback in the development environment. In a production environment, this could be enhanced by:

- Using Remix session cookies for server-side persistence
- Implementing a database solution for permanent storage
- Syncing with Shopify's customer metafields

### Authentication
The app maintains Shopify's built-in OAuth flow and ShopifyProvider context, though API calls are currently mocked for development purposes.

## Future Improvements

1. Implement proper session-based persistence using Remix cookies
2. Add real Shopify API integration for product data
3. Implement customer-specific wishlists using Shopify's Customer accounts
4. Add sharing functionality for wishlists
5. Implement real cart functionality using Shopify's Cart API

## Tech Stack

- React
- Remix
- Shopify Polaris
- TypeScript
- Tailwind CSS