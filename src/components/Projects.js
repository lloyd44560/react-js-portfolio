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

import {
  ProjectsContainer,
  ProjectGrid,
  ProjectCard,
  ProjectImage,
  ProjectDescription,
  ProjectTitle,
  ProjectLink,
  ProjectText,
} from "../StyledComponents";


const Projects = () => (
  <ProjectsContainer>

  <h2>My Professional Experience</h2>
  <p>This is a section where you can make me a 3 div panels that indicates the types of systems i worked with in my Odoo ERP development experience. The divs can have like ab icon for example icon or image in accounting and a space for explanation.</p>


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
