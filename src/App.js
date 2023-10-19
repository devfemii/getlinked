import { Routes, Route } from 'react-router-dom';

import './App.css';
import Hompage from './pages/Hompage';
import pstar from './assets/Home/pstar.svg'
import gstar from './assets/Home/gstar.svg'
import wstar from './assets/Home/wstar.svg'
import Contact from './pages/Contact';
import Register from './pages/Register';

function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path='/' element={<Hompage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
<div class="snowflakes" aria-hidden="true">
  <div class="snowflake">
  <img src={pstar} alt="" />
  </div>
  <div class="snowflake">
  <img src={gstar} alt="" />
  </div>
  <div class="snowflake">
  <img src={wstar} alt="" />
  </div>
  <div class="snowflake">
  <img src={pstar} alt="" />
  </div>
  <div class="snowflake">
  <img src={gstar} alt="" />
  </div>
  <div class="snowflake">
  <img src={wstar} alt="" />
  </div>
  <div class="snowflake">
  <img src={pstar} alt="" />
  </div>
  <div class="snowflake">
  <img src={gstar} alt="" />
  </div>
  <div class="snowflake">
  <img src={wstar} alt="" />
  </div>
  <div class="snowflake">
  <img src={pstar} alt="" />
  </div>
</div>
    </>
  );
}

export default App;
