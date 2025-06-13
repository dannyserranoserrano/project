import React from 'react';
import ciria1Img from '../Assets/Images/ciria1.webp';

const CiriaHero = ({ setCurrentPage }) => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${ciria1Img})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">Descubre la Magia de Ciria</h2>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl drop-shadow-md">Un rincón de Soria lleno de historia, naturaleza y encanto.</p>
        <button
          onClick={() => setCurrentPage('places')}
          className="bg-white text-gray-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all shadow-lg"
        >
          Explora Ciria
        </button>
      </div>
    </section>
  );
};

export default CiriaHero;