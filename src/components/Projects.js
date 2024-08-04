import React from "react";

// Images
import MazeGameImage from "../assets/image/maze-game.png";
import BankingSystemImage from "../assets/image/TECHBANK2.png";
import FacultyManagementImage from "../assets/image/PUPCES.png";
import TypingGameImage from "../assets/image/Typing.PNG";
import ShoppingWebsiteImage from "../assets/image/Shopping.png";
import MobileAppLandingImage from "../assets/image/MOBHASS.PNG";
import CoffeeWebsiteImage from "../assets/image/Coffee.png";

import InventoryIcon from "../assets/image/Invent.png";
import HRIcon from "../assets/image/HR.jpg";
import AccountingIcon from "../assets/image/Accounting.png";
import AttendanceIcon from "../assets/image/attendance.png";
import LoanIcon from "../assets/image/LOAN_ICON.png";
import PayrollIcon from "../assets/image/payroll.png";
import {
  ProjectsContainer,
  ProjectGrid,
  ProjectCard,
  ProjectImage,
  ProjectDescription,
  ProjectTitle,
  ProjectLink,
  ProjectText,
  ExperienceContainer,
  ExperiencePanel,
  ExperienceIcon,
  ExperienceDescription,
} from "../StyledComponents";

const Projects = () => (
  <ProjectsContainer>
    <h2>My Professional Experience</h2>
    <ExperienceContainer>
      <ExperiencePanel>
        <ExperienceIcon src={AccountingIcon} alt="Accounting Icon" />
        <h3>Accounting</h3>
        <ExperienceDescription>
          Developed and customized accounting modules including invoicing, billing, and financial reporting.
        </ExperienceDescription>
      </ExperiencePanel>
      <ExperiencePanel>
        <ExperienceIcon src={InventoryIcon} alt="Inventory Icon" />
        <h3>Inventory Management</h3>
        <ExperienceDescription>
          Contributed to an inventory management system made for a warehouse storing Sky Cable products. I worked with features such as product registration, stock management, reporting, barcode integration, etc.
        </ExperienceDescription>
      </ExperiencePanel>
      <ExperiencePanel>
        <ExperienceIcon src={HRIcon} alt="HR Icon" />
        <h3>Human Resources</h3>
        <ExperienceDescription>
          Contributed to a Human Resources Management System that has features such as HR Dashboard, Multi-Company, Employee Management, Automation on Leave Request, and more.
        </ExperienceDescription>
      </ExperiencePanel>
    </ExperienceContainer>

    <ExperienceContainer>
      <ExperiencePanel>
        <ExperienceIcon src={AttendanceIcon} alt="Attendance Icon" />
        <h3>Attendance Module for Company</h3>
        <ExperienceDescription>
          Contributed to the Attendance Module that serves as the application to monitor employees check-in and check-out times in real time, produce reports of employee hours, and access employee overtime hours.
        </ExperienceDescription>
      </ExperiencePanel>
      <ExperiencePanel>
        <ExperienceIcon src={LoanIcon} alt="Loan Icon" />
        <h3>Loan Management</h3>
        <ExperienceDescription>
          Contributed to the Loan Management System that was made for configuring loan policies, assigning user access for each user, and the verification process of the loan up to the disbursement to the employee as well as the accounting side.
        </ExperienceDescription>
      </ExperiencePanel>
      <ExperiencePanel>
        <ExperienceIcon src={PayrollIcon} alt="Payroll Icon" />
        <h3>Payroll</h3>
        <ExperienceDescription>
          Enhanced HR modules for employee management, payroll, attendance tracking, and recruitment processes.
        </ExperienceDescription>
      </ExperiencePanel>
    </ExperienceContainer>

    <h2>My Projects</h2>
    <p>This is a section where you can showcase your projects.</p>
    <ProjectGrid>
      <ProjectCard>
        <ProjectImage src={MazeGameImage} alt="Project 1" />
        <ProjectDescription>
          <ProjectTitle>
            <ProjectLink href="https://2d-react-maze-game.netlify.app/" target="_blank" rel="noopener noreferrer">
              2D Maze Game
            </ProjectLink>
          </ProjectTitle>
          <ProjectText>
            A simple 2d maze game made in ReactJS in a theme of a zombie out to get the human.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage src={BankingSystemImage} alt="Project 2" />
        <ProjectDescription>
          <ProjectTitle>
            <ProjectLink href="https://example.com/banking-system" target="_blank" rel="noopener noreferrer">
              Online Banking System
            </ProjectLink>
          </ProjectTitle>
          <ProjectText>
            An online banking system made in ASP.net MVC and MySQL for database.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage src={FacultyManagementImage} alt="Project 3" />
        <ProjectDescription>
          <ProjectTitle>
            <ProjectLink href="https://example.com/faculty-management" target="_blank" rel="noopener noreferrer">
              Faculty Management System
            </ProjectLink>
          </ProjectTitle>
          <ProjectText>
            A Faculty Management System made with ASP.net MVC and MSSQL for database used in the university to monitor the faculty assigned in a campus.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage src={TypingGameImage} alt="Project 4" />
        <ProjectDescription>
          <ProjectTitle>
            <ProjectLink href="https://example.com/typing-game" target="_blank" rel="noopener noreferrer">
              Typing Game
            </ProjectLink>
          </ProjectTitle>
          <ProjectText>
            A typing game that tests the user to type the given sentence under time pressure.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage src={ShoppingWebsiteImage} alt="Project 5" />
        <ProjectDescription>
          <ProjectTitle>
            <ProjectLink href="https://example.com/shopping-website" target="_blank" rel="noopener noreferrer">
              Shopping Website
            </ProjectLink>
          </ProjectTitle>
          <ProjectText>
            A simple online shopping website that features products such as the latest phones, shoes, and laptops.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage src={MobileAppLandingImage} alt="Project 6" />
        <ProjectDescription>
          <ProjectTitle>
            <ProjectLink href="https://example.com/mobile-app-landing" target="_blank" rel="noopener noreferrer">
              Mobile App Landing Page
            </ProjectLink>
          </ProjectTitle>
          <ProjectText>
            A landing page made with ReactJS for a mobile app that features music.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage src={CoffeeWebsiteImage} alt="Project 7" />
        <ProjectDescription>
          <ProjectTitle>
            <ProjectLink href="https://example.com/coffee-website" target="_blank" rel="noopener noreferrer">
              Coffee Website
            </ProjectLink>
          </ProjectTitle>
          <ProjectText>
            A simple website made with ReactJS that showcases different coffee products.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
    </ProjectGrid>
  </ProjectsContainer>
);

export default Projects;
