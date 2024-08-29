import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.jsx';
import Projects from './pages/projects/projects.jsx';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <div className='App p-0 m-0 justify-content-center'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
