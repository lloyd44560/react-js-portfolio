import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const About = () => (
    <AboutContainer>
      <h2>About Me</h2>
      <p>This is a section where you can describe yourself.</p>
    </AboutContainer>
  );
  
  export default About;