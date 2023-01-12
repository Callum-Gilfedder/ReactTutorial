import logo from './logo.svg';
import Navbar from './Navbar.js'
import { useState } from 'react'


function App() {
  const [name, setName] = useState("initial-state")
  const [age, setAge] = useState("18") 

  const handleClick = () => {
    setName("altered-state")
    setAge("20")
  }

  return (
    <div className="App">
      <Navbar />
      <h1>
        { name } { age }
      </h1>
      <button onClick={handleClick}>Test button</button>
    </div>
  );
}

export default App;
