import React from 'react';

const CiriaContact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Contáctanos</h2>
        <p className="text-xl text-gray-600 mb-8">¿Tienes alguna pregunta o quieres saber más sobre Ciria? ¡No dudes en escribirnos!</p>
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">
          <p className="text-2xl font-semibold text-gray-800 mb-4">Correo Electrónico:</p>
          <a href="mailto:info@ciriaencantada.com" className="text-blue-600 hover:underline text-xl">info@villadeciria.es</a>
          <p className="text-gray-500 mt-6">¡Esperamos verte pronto en Ciria!</p>
        </div>
      </div>
    </section>
  );
};

export default CiriaContact;