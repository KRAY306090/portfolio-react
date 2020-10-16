import React from 'react';
import Project from '../Project/index';
import Wrapper from '../Wrapper';
import projects from '../Project/projects.json';


function Portfolio() {
   return (
     <Wrapper>
       <h2 className="section-title">Projects</h2>
       <div class="container">
       <div className="row">
       {
         projects.map(project => (
           <Project 
           id={project.id}
           image={project.image}
           name={project.name}
           github={project.github}
           deployed={project.deployed}
           />
         ))
       }
       </div>
       </div>

     </Wrapper>
   );
   }

export default Portfolio;