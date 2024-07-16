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

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const LeftSection = styled.div`
  max-width: 45%;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const RightSection = styled.div`
  max-width: 45%;

  @media (max-width: 768px) {
    max-width: 60%;
    margin-top: 1rem;
  }
`;

const BigHeader = styled.h1`
  font-size: 3rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubHeader = styled.h2`
  font-size: 1.5rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Paragraph = styled.p`
  margin-top: 1rem;
`;

const Image = styled.img`
  max-width: 80%;
  height: auto;
  border-radius: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const InfoSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const InfoItem = styled.div`
  margin: 0 1rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const StyledLink = styled.a`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: white;
    color: #282c34;
  }
`;

const LinkedInLink = styled(StyledLink)`
color: #211f1f;


  &:hover {

    color: #0e76a8;
  }
`;

const GitHubLink = styled(StyledLink)`
  color: #211f1f;


`;

const Home = () => (
  <div>
    <HeroSection>
      <LeftSection>
        <BigHeader>Jhon Lloyd L. Borlagdan</BigHeader>
        <SubHeader>Web Developer</SubHeader>
        <Paragraph>
          Good day! I am a web developer specializing in front-end and back-end technologies for the web. With a background in ERP development and web development, I bring my experience in creating scalable and efficient web applications that are tailored to my business needs.
        </Paragraph>
        <StyledLink href="/projects">View my projects and experience</StyledLink>
      </LeftSection>
      <RightSection>
        <Image src={profileImage} alt="Profile" />
      </RightSection>
    </HeroSection>
    <InfoSection>
      <InfoItem>
        <FaEnvelope />
        <span>jhonlloydborlagdan8@example.com</span>
      </InfoItem>
      <InfoItem>
        <FaPhone />
        <span>09203614524</span>
      </InfoItem>
      <InfoItem>
        <FaLinkedin />
        <LinkedInLink href="https://www.linkedin.com/in/jhon-lloyd-borlagdan">Linkedin</LinkedInLink>
      </InfoItem>
      <InfoItem>
        <FaGithub />
        <GitHubLink href="https://github.com/jhonlloyd">Github</GitHubLink>
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
