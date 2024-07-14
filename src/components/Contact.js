import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: #f0f4f8;
  height: 100vh;
`;

const FormWrapper = styled.div`
  display: flex;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  text-align: left;
`;

const FormImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 1rem;
`;

const FormTitle = styled.h2`
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 400px;
  width: 100%;
`;

const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
`;

const FormLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: calc(50% - 0.5rem);
  transition: border-color 0.3s;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  transition: border-color 0.3s;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const FormButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(to right, #6a11cb, #2575fc);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: linear-gradient(to right, #2575fc, #6a11cb);
  }
`;

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
