import React from "react";
import styled from "styled-components";

// Import images from src/assets
import MazeGameImage from "../assets/image/Coffee.png";
import BankingSystemImage from "../assets/image/profile.png";
import FacultyManagementImage from "../assets/image/profile.png";
import USAPImage from "../assets/image/profile.png";
import ComplaintManagementImage from "../assets/image/profile.png";
import ProductRecommendationImage from "../assets/image/profile.png";
import TypingGameImage from "../assets/image/profile.png";
import ShoppingWebsiteImage from "../assets/image/profile.png";
import MobileAppLandingImage from "../assets/image/MOBHASS.PNG";
import CoffeeWebsiteImage from "../assets/image/Coffee.png";

const ProjectsContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const ProjectGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled.div`
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

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectDescription = styled.div`
  padding: 1rem;
  background-color: #f5f5f5;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`;

const ProjectText = styled.p`
  margin: 0.5rem 0 0;
  font-size: 1rem;
  color: #333;
`;

const Projects = () => (
  <ProjectsContainer>
    <h2>My Projects</h2>
    <p>This is a section where you can showcase your projects.</p>
    <ProjectGrid>
      <ProjectCard>
        <ProjectImage src={MazeGameImage} alt="Project 1" />
        <ProjectDescription>
          <ProjectTitle>2D Maze Game</ProjectTitle>
          <ProjectText>
            A simple 2d maze game made in ReactJS in a theme of a zombie out to get the human.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage src={BankingSystemImage} alt="Project 2" />
        <ProjectDescription>
          <ProjectTitle>Online Banking System</ProjectTitle>
          <ProjectText>
            An online banking system made in ASP.net MVC and MySQL for database.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage src={FacultyManagementImage} alt="Project 3" />
        <ProjectDescription>
          <ProjectTitle>Faculty Management System</ProjectTitle>
          <ProjectText>
            Contributed to a Faculty Management System to parts such as Real-time chat app, student and faculty information management.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
    </ProjectGrid>
    <ProjectGrid>
      <ProjectCard>
        <ProjectImage src={USAPImage} alt="Project 1" />
        <ProjectDescription>
          <ProjectTitle>USAP</ProjectTitle>
          <ProjectText>
            A real-time chat application that enables users to chat, share files and form groups.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage src={ComplaintManagementImage} alt="Project 2" />
        <ProjectDescription>
          <ProjectTitle>Complaint Management System</ProjectTitle>
          <ProjectText>
            Users can submit and monitor complaints to the authority, and the authority can respond to these complaints.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage src={ProductRecommendationImage} alt="Project 3" />
        <ProjectDescription>
          <ProjectTitle>Product Recommendation System</ProjectTitle>
          <ProjectText>
            A brief description of Project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
    </ProjectGrid>
    <h2>Sample Web Pages</h2>
    <ProjectGrid>
      <ProjectCard>
        <ProjectImage src={TypingGameImage} alt="Project 1" />
        <ProjectDescription>
          <ProjectTitle>Javascript Typing Game</ProjectTitle>
          <ProjectText>
            A simple typing game using HTML, CSS and Javascript. The goal is to complete typing all the words within a minute.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage src={ShoppingWebsiteImage} alt="Project 2" />
        <ProjectDescription>
          <ProjectTitle>Shopping Website / E-commerce Website</ProjectTitle>
          <ProjectText>
            A simple shopping website for showcasing digital products that has a simple cart made with HTML, CSS and Javascript.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage src={MobileAppLandingImage} alt="Project 3" />
        <ProjectDescription>
          <ProjectTitle>Mobile App Landing Page</ProjectTitle>
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
          <ProjectTitle>Coffee Website Landing Page</ProjectTitle>
          <ProjectText>
            A simple landing page for a Coffee Store made using HTML, CSS, Javascript and Bootsrap.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
    </ProjectGrid>
  </ProjectsContainer>
);

export default Projects;
