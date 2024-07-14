import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import styled from 'styled-components';
import profileImage from './assets/image/profile.png';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const HeroSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  background-color: #282c34;
  color: white;
`;

const LeftSection = styled.div`
  max-width: 45%;
`;

const RightSection = styled.div`
  max-width: 45%;
`;

const BigHeader = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const SubHeader = styled.h2`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const Paragraph = styled.p`
  margin-top: 1rem;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 50%;
`;

const InfoSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const InfoItem = styled.div`
  margin: 0 1rem;
  display: flex;
  align-items: center;
`;

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  margin-left: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Home = () => (
  <div>
    <HeroSection>
      <LeftSection>
        <BigHeader>Jhon Lloyd L. Borlagdan</BigHeader>
        <SubHeader>Web Developer</SubHeader>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non libero nec felis suscipit vehicula.
        </Paragraph>
      </LeftSection>
      <RightSection>
        <Image src={profileImage} alt="Profile" />
      </RightSection>
    </HeroSection>
    <InfoSection>
      <InfoItem>
        <FaEnvelope />
        <span>Email: jhon@example.com</span>
      </InfoItem>
      <InfoItem>
        <FaPhone />
        <span>Contact: 123-456-7890</span>
      </InfoItem>
      <InfoItem>
        <FaLinkedin />
        <StyledLink href="https://www.linkedin.com/in/jhon-lloyd-borlagdan">Jhon Lloyd Borlagdan</StyledLink>
      </InfoItem>
      <InfoItem>
        <FaGithub />
        <StyledLink href="https://github.com/jhonlloyd">jhonlloyd</StyledLink>
      </InfoItem>
    </InfoSection>
  </div>
);

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ContentWrapper>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
