import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import Header from "./components/Header.js"
import MainContent from "./components/MainContent.js"
import Footer from "./components/Footer.js"






function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
