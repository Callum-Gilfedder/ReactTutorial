import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js'



function App() {
  let x = "Hello world alt"; 
  const link = "https://google.com";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        { x }
      </div>
      <a href={link}>Link</a> 
    </div>
  );
}

export default App;
