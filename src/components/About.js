import React from "react";

import { FaBriefcase, FaCode } from "react-icons/fa";

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
            <FaBriefcase />
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
            <FaCode />
          </SubSectionIcon>
         Personal Side
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

    <SubSectionContainer>
      <SubSection>
        <SubSectionTitle>
          <SubSectionIcon>
            <FaBriefcase />
          </SubSectionIcon>
          Professional Side
        </SubSectionTitle>
        <ParagraphAbout>
          I am a dedicated web developer with over 2 years of experience in Odoo ERP development. I specialize in web development with a strong background in backend technologies. 
          My passion is to build efficient and scalable web applications that provide seamless user experiences and solves customer problems.
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
