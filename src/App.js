import React from 'react';
import Home from './Components/Home';
import Product from './Components/Product';
import Services from './Components/Services';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './Components/About';


function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1 style={{ textAlign: "center", color: "GrayText" }}>This React Application is an example of React Router.</h1>
      <Router>
        <div className='navbar'>

          <nav>
            <ul style={{ listStyleType: "none",display:"-webkit-flex", justifyContent: "center", backgroundColor:"tomato"}}> {/* Apply flexbox styles to the ul */}
              <li style={{ margin: "0 10px" }}> 
                <Link to='/Home'>Home</Link>
              </li>
              <li style={{ margin: "0 10px" }}>
                <Link to='/Product'>Product</Link>
              </li>
              <li style={{ margin: "0 10px" }}>
                <Link to='/Services'>Services</Link>
              </li>             
              <li style={{ margin: "0 10px" }}>
                <Link to='/About'>About</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/Product' element={<Product />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/About' element={<About/>} />
          </Routes>

        </div>
      </Router>
    </div>
  );
}

export default App;
