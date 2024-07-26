import React from "react";

// Images 
import MazeGameImage from "../assets/image/maze-game.png";
import BankingSystemImage from "../assets/image/TECHBANK2.png";
import FacultyManagementImage from "../assets/image/PUPCES.png";
// import USAPImage from "../assets/image/profile.png";
// import ComplaintManagementImage from "../assets/image/profile.png";
// import ProductRecommendationImage from "../assets/image/profile.png";
import TypingGameImage from "../assets/image/Typing.PNG";
import ShoppingWebsiteImage from "../assets/image/Shopping.png";
import MobileAppLandingImage from "../assets/image/MOBHASS.PNG";
import CoffeeWebsiteImage from "../assets/image/Coffee.png";

import InventoryIcon from "../assets/image/inventory.png";
import HRIcon from "../assets/image/HR.jpg";
import AccountingIcon from "../assets/image/Accounting.png";
import AttendanceIcon from "../assets/image/attendance.png";
import LoanIcon from "../assets/image/loan.png";
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
        <ExperienceIcon src={AttendanceIcon} alt="Accounting Icon" />
        <h3>Attendance Module for Company</h3>
        <ExperienceDescription>
          Contributed to the Attendance Module that serves as the application to monitor employees check-in and check-out times in real time, produce reports of employee hours, and access employee overtime hours.
        </ExperienceDescription>
      </ExperiencePanel>
      <ExperiencePanel>
        <ExperienceIcon src={LoanIcon} alt="Inventory Icon" />
        <h3>Loan Management</h3>
        <ExperienceDescription>
        Contributed to the Loan Management System that was made for configuring loan policies, assigning user access for each user, and the verification process of the loan up to the disbursement to the employee as well as the accounting side.
        </ExperienceDescription>
      </ExperiencePanel>
      <ExperiencePanel>
        <ExperienceIcon src={PayrollIcon} alt="HR Icon" />
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
            <ProjectLink href="https://pupsces.vercel.app/" target="_blank" rel="noopener noreferrer">
              Faculty Management System
            </ProjectLink>
          </ProjectTitle>
          <ProjectText>
            Contributed to a Faculty Management System to parts such as Real-time chat app, student and faculty information management.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
    </ProjectGrid>
    {/* <ProjectGrid>
      <ProjectCard>
        <ProjectImage src={USAPImage} alt="Project 1" />
        <ProjectDescription>
          <ProjectTitle>
            <ProjectLink href="https://example.com/usap" target="_blank" rel="noopener noreferrer">
              USAP
            </ProjectLink>
          </ProjectTitle>
          <ProjectText>
            A real-time chat application that enables users to chat, share files and form groups.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage src={ComplaintManagementImage} alt="Project 2" />
        <ProjectDescription>
          <ProjectTitle>
            <ProjectLink href="https://example.com/complaint-management" target="_blank" rel="noopener noreferrer">
              Complaint Management System
            </ProjectLink>
          </ProjectTitle>
          <ProjectText>
            Users can submit and monitor complaints to the authority, and the authority can respond to these complaints.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage src={ProductRecommendationImage} alt="Project 3" />
        <ProjectDescription>
          <ProjectTitle>
            <ProjectLink href="https://luxury-raindrop-022ff0.netlify.app/home" target="_blank" rel="noopener noreferrer">
              Budget Calculator
            </ProjectLink>
          </ProjectTitle>
          <ProjectText>
            A brief description of Project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
    </ProjectGrid> */}
    <h2>Sample Web Pages</h2>
    <ProjectGrid>
      <ProjectCard>
        <ProjectImage src={TypingGameImage} alt="Project 1" />
        <ProjectDescription>
          <ProjectTitle>
            <ProjectLink href="https://lloyd44560.github.io/Typing-Game/" target="_blank" rel="noopener noreferrer">
              Javascript Typing Game
            </ProjectLink>
          </ProjectTitle>
          <ProjectText>
            A simple typing game using HTML, CSS and Javascript. The goal is to complete typing all the words within a minute.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage src={ShoppingWebsiteImage} alt="Project 2" />
        <ProjectDescription>
          <ProjectTitle>
            <ProjectLink href="https://lloyd44560.github.io/Ecommerce/" target="_blank" rel="noopener noreferrer">
              Shopping Website / E-commerce Website
            </ProjectLink>
          </ProjectTitle>
          <ProjectText>
            A simple shopping website for showcasing digital products that has a simple cart made with HTML, CSS and Javascript.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage src={MobileAppLandingImage} alt="Project 3" />
        <ProjectDescription>
          <ProjectTitle>
            <ProjectLink href="https://lloyd44560.github.io/Mobhass/" target="_blank" rel="noopener noreferrer">
              Mobile App Landing Page
            </ProjectLink>
          </ProjectTitle>
          <ProjectText>
            A landing page for a mobile based home automation and security system using HTML, CSS, and Javascript.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
    </ProjectGrid>
    <ProjectGrid>
      <ProjectCard>
        <ProjectImage src={CoffeeWebsiteImage} alt="Project 1" />
        <ProjectDescription>
          <ProjectTitle>
            <ProjectLink href="https://lloyd44560.github.io/Coffee_Shop/" target="_blank" rel="noopener noreferrer">
              Coffee Website Landing Page
            </ProjectLink>
          </ProjectTitle>
          <ProjectText>
            A simple landing page for a Coffee Store made using HTML, CSS, Javascript and Bootsrap.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
    </ProjectGrid>
  </ProjectsContainer>
);

export default Projects;
