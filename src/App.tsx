import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import { WishlistProvider } from './context/WishlistContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Products } from './pages/Products';
import { Wishlist } from './pages/Wishlist';

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Router>
        <WishlistProvider>
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navigation />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/wishlist" element={<Wishlist />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </WishlistProvider>
      </Router>
    </AppProvider>
  );
}

export default App;