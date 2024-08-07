import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import WordCounter from './tools/WordCounter';

const App = ()=>{
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/word-counter' element={<WordCounter/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App