import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-600">
          <p>© {currentYear} BornAndBred Malta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 