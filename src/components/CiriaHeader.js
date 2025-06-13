import React from 'react';

const CiriaHeader = ({ setCurrentPage }) => {
  return (
    <header className="w-full bg-white shadow-lg p-4 flex justify-between items-center fixed top-0 z-50">
      <h1 className="text-2xl font-bold text-gray-800">Villa de Ciria</h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <button
              onClick={() => setCurrentPage('home')}
              className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
            >
              Inicio
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage('places')}
              className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
            >
              Lugares
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage('panorama')}
              className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
            >
              Panorama 360
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage('contact')}
              className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
            >
              Contacto
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default CiriaHeader;