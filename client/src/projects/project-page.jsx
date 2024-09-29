import React, {useState, useEffect}from "react";
import './project-page.css'
import Navigation from "../home/navigation/nav";
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProjectDomain from "./project-domain";

function ProjectPage(){

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
          try {
            const response = await axios.get("http://localhost:5001/projects");
            setProjects(response.data);
          } catch (error) {
            console.error("Error fetching projects:", error);
          }
        };
    
        fetchProjects();
    }, []);

    return(

        <div className="project-view">
                <Navigation/>

                <div className='project-list'>
                    <h2>Project List</h2>
                    <div className="projects-container">
                        {projects.map(project => (
                            <div key={project.project_id} className="project-item">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <p>Domain: {project.domain}</p>
                                <p>File: <a href={project.file} target="_blank" rel="noopener noreferrer">{project.file}</a></p>
                                <p>Upload Date: {new Date(project.upload_date).toLocaleDateString()}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>

        

       
    )
}

export default ProjectPage;