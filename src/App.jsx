import './App.css';
import Nav from './Components/main-nav/nav-container';

function App() {
  return (
    <div className="App">
      <div className='nav'>
        <Nav/>
      </div>
    {/* Esto en un futuro va a parte para acomodar el React Router */}
      <div className='main'>
        
      </div>
      <div className='bio'>

      </div>
      <div className='cta'>

      </div>
      <div className='cases'>

      </div>
      <div className='contact'>

      </div>
      <div className='footer'>

      </div>
    </div>
  );
}

export default App;
