import './App.css';
import React, {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Flix from './components/flix';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Flix/>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
