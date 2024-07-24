import styled, { keyframes }  from 'styled-components';
import { Link } from 'react-router-dom';

// Header
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #282c34;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  position: relative;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #61dafb; // Change text color on hover
  }

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #61dafb;
    transition: width 0.3s ease-in-out;
    position: absolute;
    bottom: -2px;
    left: 0;
  }

  &:hover::after {
    width: 100%; // Animate underline on hover
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

export const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${props => (props.open ? 'flex' : 'none')};
    animation: ${props => (props.open ? slideDown : 'none')} 0.5s ease-in-out;
  }
`;

export const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
  }
`;


// App
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  flex: 1;
`;

export const HeroSection = styled.section`
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

export const LeftSection = styled.div`
  max-width: 45%;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

export const RightSection = styled.div`
  max-width: 45%;

  @media (max-width: 768px) {
    max-width: 60%;
    margin-top: 1rem;
  }
`;

export const BigHeader = styled.h1`
  font-size: 3rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SubHeader = styled.h2`
  font-size: 1.5rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Paragraph = styled.p`
  margin-top: 1rem;
`;

export const Image = styled.img`
  max-width: 80%;
  height: auto;
  border-radius: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const InfoSection = styled.section`
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

export const InfoItem = styled.div`
  margin: 0 1rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

export const StyledLink = styled.a`
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

export const LinkedInLink = styled(StyledLink)`
  color: #211f1f;

  &:hover {
    color: #0e76a8;
  }
`;

export const GitHubLink = styled(StyledLink)`
  color: #211f1f;
`;


// Projects

export const ProjectsContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

export const ProjectGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

export const ProjectCard = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProjectDescription = styled.div`
  padding: 1rem;
  background-color: #f5f5f5;
`;

export const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

export const ProjectText = styled.p`
  margin: 0.5rem 0 0;
  font-size: 1rem;
  color: #333;
`;

// About Us Components 


export const AboutContainer = styled.div`
  padding: 2rem;
  background-color: #f4f4f4;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`;

export const SubSectionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

export const SubSection = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 45%;
  margin: 1rem;
  text-align: left;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const SubSectionTitle = styled.h3`
  display: flex;
  align-items: center;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #282c34;
`;

export const SubSectionIcon = styled.span`
  margin-right: 0.5rem;
  color: #61dafb;
`;

export const ParagraphAbout = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
`;

export const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const SkillItem = styled.li`
  font-size: 1.2rem;
  color: #666;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
`;

export const SkillIcon = styled.span`
  margin-right: 0.5rem;
  color: #61dafb;
`;


// Contacts Component


export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: #f0f4f8;
  height: 100vh;
`;

export const FormWrapper = styled.div`
  display: flex;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FormInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  text-align: left;
`;

export const FormImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 1rem;
`;

export const FormTitle = styled.h2`
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 400px;
  width: 100%;
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
`;

export const FormInput = styled.input`
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

export const FormTextarea = styled.textarea`
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

export const FormButton = styled.button`
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