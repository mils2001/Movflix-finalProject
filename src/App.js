import './App.css';
import React, {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Flix from './components/flix';
import Home from './components/flix'
import About from './components/Pages/About'
import Layout  from './components/Pages/Layout';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Flix/>
      <Routes>
      <Route path="/" element={<Layout />} />
      <Route path='./components/flix.js' element={<Home/>}/>
      <Route path="/about" element={<About />} />

      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
