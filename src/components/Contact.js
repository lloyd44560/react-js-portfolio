import React from 'react';

import {
  ContactContainer,
  FormWrapper,
  FormInfo,
  FormImage,
  FormTitle,
  Form,
  FormGroup,
  FormInput,
  FormTextarea,
  FormButton
} from '../StyledComponents'; // Adjust the path if necessary

const Contact = () => (
  <ContactContainer>
    <FormWrapper>
      <FormInfo>
        <FormImage src="/path-to-your-image.png" alt="Contact" />
        <FormTitle>Have some questions?</FormTitle>
        <p>Feel free to reach out to me using the form below:</p>
      </FormInfo>
      <Form>
        <FormGroup>
          <FormInput type="text" placeholder="First Name" required />
          <FormInput type="text" placeholder="Last Name" required />
        </FormGroup>
        <FormGroup>
          <FormInput type="email" placeholder="What's your email?" required />
        </FormGroup>
        <FormGroup>
          <FormTextarea placeholder="Your questions..." rows="4" required />
        </FormGroup>
        <FormButton type="submit">Send Message</FormButton>
      </Form>
    </FormWrapper>
  </ContactContainer>
);

export default Contact;
