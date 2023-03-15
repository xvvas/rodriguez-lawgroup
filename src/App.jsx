import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import Nav from './Components/main-nav/Js/nav-container';
import Home from './Components/Pages/home'
function App() {
  return (
    <div className="App">
        <Nav/>
    {/* Esto en un futuro va a parte para acomodar el React Router */}
    <Router>
      <Routes>
        <Route path='/' exact component={Home} />
      </Routes>
    </Router>
    <div className='footer'>
      </div>
    </div>
  );
}

export default App;
