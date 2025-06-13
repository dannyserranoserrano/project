import React, { useState } from 'react';
import CiriaHeader from './components/CiriaHeader';
import CiriaHero from './components/CiriaHero';
import CiriaPlaces from './components/CiriaPlaces';
import CiriaPanorama from './components/CiriaPanorama';
import CiriaContact from './components/CiriaContact';
import CiriaFooter from './components/CiriaFooter';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <CiriaHero setCurrentPage={setCurrentPage} />;
      case 'places':
        return <CiriaPlaces />;
      case 'panorama':
        return <CiriaPanorama />;
      case 'contact':
        return <CiriaContact />;
      default:
        return <CiriaHero setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="font-sans antialiased text-gray-900">
      <CiriaHeader setCurrentPage={setCurrentPage} />
      <main className="pt-16"> {/* Padding top para compensar el header fijo */}
        {renderPage()}
      </main>
      <CiriaFooter />
    </div>
  );
};

export default App;

// DONE