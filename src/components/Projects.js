import React from "react";
import styled from "styled-components";


const ProjectsContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Projects = () => (
  <ProjectsContainer>
    <h2>My Projects</h2>
    <p>This is a section where you can showcase your projects.</p>
  </ProjectsContainer>
);

export default Projects;