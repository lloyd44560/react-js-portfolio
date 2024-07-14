import React from "react";
import styled from "styled-components";

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
        <ProjectImage src="https://via.placeholder.com/300x200" alt="Project 1" />
        <ProjectDescription>
          <ProjectTitle>2D Maze Game</ProjectTitle>
          <ProjectText>
            A simple 2d maze game made in ReactJS  in a theme of a zombie out to get the human.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage src="https://via.placeholder.com/300x200" alt="Project 2" />
        <ProjectDescription>
          <ProjectTitle>Online Banking System</ProjectTitle>
          <ProjectText>
            An online banking system made in ASP.net MVC and MySQL for database.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage src="https://via.placeholder.com/300x200" alt="Project 3" />
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
        <ProjectImage src="https://via.placeholder.com/300x200" alt="Project 1" />
        <ProjectDescription>
          <ProjectTitle>USAP</ProjectTitle>
          <ProjectText>
           A real-time chat application that enables users to chat, share files and form groups.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage src="https://via.placeholder.com/300x200" alt="Project 2" />
        <ProjectDescription>
          <ProjectTitle>Complaint Management System</ProjectTitle>
          <ProjectText>
           Users can submit and monitor complaints to the authority, and the authority can respond to these complaints. 
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage src="https://via.placeholder.com/300x200" alt="Project 3" />
        <ProjectDescription>
          <ProjectTitle>Product Recommendation System</ProjectTitle>
          <ProjectText>
            A brief description of Project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ProjectText>
        </ProjectDescription>
      </ProjectCard>
    </ProjectGrid>
  </ProjectsContainer>
);

export default Projects;
