import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} All Rights Reserved. Made by Riddhi Chakraborty
        </p>
      </div>
    </footer>
  );
}