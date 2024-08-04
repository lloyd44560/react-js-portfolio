import React from "react";

import { FaBriefcase, FaCode, FaBook, FaPersonBooth} from "react-icons/fa";

import {
  AboutContainer,
  SectionTitle,
  SubSectionContainer,
  SubSection,
  SubSectionTitle,
  SubSectionIcon,
  ParagraphAbout,
  SkillsList,
  SkillItem,
  SkillIcon
} from "../StyledComponents";

const About = () => (
  <AboutContainer>
    <SectionTitle>About Me</SectionTitle>
    <SubSectionContainer>
      <SubSection>
        <SubSectionTitle>
          <SubSectionIcon>
            <FaBook />
          </SubSectionIcon>
         Education
        </SubSectionTitle>
        <ParagraphAbout>
          I graduated with a Bachelor's Degree in Information Security in Quezon City University in 2022. For my final year, we developed a Home Automation and Security System
          where we used IOT technologies to allow users to access their home wherever they were . 
        </ParagraphAbout>
      </SubSection>
      <SubSection>
        <SubSectionTitle>
          <SubSectionIcon>
            < FaPersonBooth />
          </SubSectionIcon>
         Personal Side
        </SubSectionTitle>
        <SkillsList>
          <SkillItem>
        Hi there! I am a passionate developer based in Quezon City. With a background in ERP development, my personality is that I love to learn new things and take on challenges. I love turning ideas into functional code with a help of a cup of coffee and my adorable and fluffy cat. Let’s build something amazing together!
          </SkillItem>
         
        </SkillsList>
      </SubSection>
    </SubSectionContainer>

    <SubSectionContainer>
      <SubSection>
        <SubSectionTitle>
          <SubSectionIcon>
            <FaBriefcase />
          </SubSectionIcon>
          Professional Side
        </SubSectionTitle>
        <ParagraphAbout>
          I am a dedicated Software Engineer with over 2 years of experience in Odoo ERP development.  
          My experience is in developing business applications for companies like HRMS, Inventory Management System, Accounting and Loan Management System.
        </ParagraphAbout>
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
            Python (Django, Flask)
            
          </SkillItem>
          <SkillItem>
            <SkillIcon>
              <FaCode />
            </SkillIcon>
            HTML & PHP & CSS
          </SkillItem>
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
            SQL & NoSQL Databases
          </SkillItem>
        </SkillsList>
      </SubSection>
    </SubSectionContainer>
  </AboutContainer>
);

export default About;
