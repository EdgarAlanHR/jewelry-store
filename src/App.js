import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductGallery from './components/ProductGallery';
import CustomChainDesign from './components/CustomChainDesign';
import './styles/tailwind.css';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ProductGallery />
        <CustomChainDesign />
      </main>
      <Footer />
    </div>
  );
}

export default App;
