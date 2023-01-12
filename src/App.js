import logo from './logo.svg';
import Navbar from './Navbar.js'



function App() {
  const handleClick = () => {
    console.log("function working correctly")
  }


  return (
    <div className="App">
      <Navbar />
      <h1>
        Content
      </h1>
      <button onClick={handleClick}>Test button</button>
    </div>
  );
}

export default App;
