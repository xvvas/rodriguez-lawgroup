import './App.css';
import {BrowserRouter, Routes, Route, } from "react-router-dom";
import Nav from './Components/main-nav/Js/nav-container';
import Home from './Components/Pages/home/js/home';
import Footer from './Components/footer/js/footerContainer';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Nav/>
          <Routes>
            <Route path='/' 
            element={<Home />} />
          </Routes>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
