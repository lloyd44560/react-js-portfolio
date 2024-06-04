import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
`;

const Home = () => (
  <div>
    <h2>Welcome to My Portfolio</h2>
    <p>This is the home page of my portfolio website.</p>
  </div>
);

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
