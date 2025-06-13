import React from 'react';

const CiriaFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center px-4">
      <div className="container mx-auto">
        <p className="text-lg mb-4">&copy; {new Date().getFullYear()} Villa de Ciria. Todos los derechos reservados.</p>
        <p className="text-md">Diseñado con amor desde Ciria.</p>
      </div>
    </footer>
  );
};

export default CiriaFooter;