import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Contact = () => (
  <ContactContainer>
    <h2>Contact Me</h2>
    <p>This is a section where you can provide your contact information.</p>
  </ContactContainer>
);

export default Contact;
