import logo from './logo.svg';
import Navbar from './Navbar.js'
import Home from './Home.js'
import { useState } from 'react'




function App() {

  const [prop1, setProp1] = useState("Property example")

  return (
    <div className="App">
      <Navbar />
      <Home name={prop1}/>
    </div>
  );
}

export default App;
