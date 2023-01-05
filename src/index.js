import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';

function Header() {
  return (
    <div class="a"> Header </div>
  )
}

function MainContent() { 
  return (
    <div>
      <h1> Main content here! </h1>
    </div> 
  )
}

function Footer() { 
  return (
    <div>
      <p> Footer here </p>
    </div> 
  )
}

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
