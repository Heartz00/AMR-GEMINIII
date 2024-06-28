import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Visuals from './components/Visuals/Visuals';
import Signup from './components/Signup/Signup';
import Input_data from './components/Input-data/Input_data';
import ChatAMRAI from './components/ChatAMRAI/ChatAMRAI';
import Landingpage from './components/Landingpage/Landingpage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/inputdata" element={<Input_data />} />
          <Route path="/visuals" element={<Visuals />} />
          <Route path="/chat" element={<ChatAMRAI />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
