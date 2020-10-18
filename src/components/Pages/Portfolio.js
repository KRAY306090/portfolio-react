import React from 'react';
import Project from '../Project/index';
import projects from '../Project/projects.json';


function Portfolio() {
  
   return (
     <div className="container my-5">
       <h2 className="section-title">Projects</h2>
       <div className="row">
       {
         projects.map(project => (
           <Project 
           
           id={project.id}
           key={project.id}
           image={project.image}
           name={project.name}
           github={project.github}
           deployed={project.deployed}
           />
         ))
       }
       </div>
       </div>
   );
   }

export default Portfolio;