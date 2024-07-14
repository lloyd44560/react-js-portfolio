import React from "react";
import styled from "styled-components";
import { FaBriefcase, FaCode } from "react-icons/fa";

const AboutContainer = styled.div`
  padding: 2rem;
  background-color: #f4f4f4;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`;

const SubSectionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const SubSection = styled.div`
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

const SubSectionTitle = styled.h3`
  display: flex;
  align-items: center;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #282c34;
`;

const SubSectionIcon = styled.span`
  margin-right: 0.5rem;
  color: #61dafb;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  font-size: 1.2rem;
  color: #666;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
`;

const SkillIcon = styled.span`
  margin-right: 0.5rem;
  color: #61dafb;
`;

const About = () => (
  <AboutContainer>
    <SectionTitle>About Me</SectionTitle>
    <SubSectionContainer>
      <SubSection>
        <SubSectionTitle>
          <SubSectionIcon>
            <FaBriefcase />
          </SubSectionIcon>
          Professional Side
        </SubSectionTitle>
        <Paragraph>
          I am a dedicated web developer with over 2 years of experience in Odoo ERP development. I specialize in web development with a strong background in backend technologies. 
          My passion is to build efficient and scalable web applications that provide seamless user experiences and solves customer problems.
        </Paragraph>
      </SubSection>
      <SubSection>
        <SubSectionTitle>
          <SubSectionIcon>
            <FaCode />
          </SubSectionIcon>
          Programming Language Experience
        </SubSectionTitle>
        <SkillsList>
          <SkillItem>
            <SkillIcon>
              <FaCode />
            </SkillIcon>
            JavaScript (React, Node.js)
          </SkillItem>
          <SkillItem>
            <SkillIcon>
              <FaCode />
            </SkillIcon>
            HTML & CSS
          </SkillItem>
          <SkillItem>
            <SkillIcon>
              <FaCode />
            </SkillIcon>
            Python (Django, Flask)
          </SkillItem>
          <SkillItem>
            <SkillIcon>
              <FaCode />
            </SkillIcon>
            SQL & NoSQL Databases
          </SkillItem>
        </SkillsList>
      </SubSection>
    </SubSectionContainer>
  </AboutContainer>
);

export default About;
