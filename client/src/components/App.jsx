import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './navbar/navbar';
import './app.css';
import Registration from './registration/Registration';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="wrap">
          <Routes>
            <Route path="/registration" component={Registration} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;