import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Objective from './components/Objective';
import Profiles from './components/Profiles';
import IncentiveTable from './components/IncentiveTable';
import Complements from './components/Complements';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />
      <Hero />
      <Objective />
      <Profiles />
      <IncentiveTable />
      <Complements />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;