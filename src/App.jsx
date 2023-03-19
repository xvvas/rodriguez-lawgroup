import './App.css';
import {BrowserRouter, Routes, Route, } from "react-router-dom";
import Nav from './Components/main-nav/Js/nav-container';
import Home from './Components/Pages/home/js/home'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Nav/>
          <Routes>
            <Route path='/' 
            element={<Home />} />
          </Routes>
        <div className='footer'>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
