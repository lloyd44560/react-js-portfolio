import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import profileImage from './assets/image/profile.png';

import {
  AppContainer,
  ContentWrapper,
  HeroSection,
  LeftSection,
  RightSection,
  BigHeader,
  SubHeader,
  Paragraph,
  Image,
  InfoSection,
  
  InfoItem,
  StyledLink,
  LinkedInLink,
  GitHubLink
} from './StyledComponents';

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
        <GitHubLink href="https://github.com/lloyd44560">Github</GitHubLink>
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
