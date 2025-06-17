import React, { useState } from "react";
import {
  useScrollAnimation,
  useStaggerAnimation,
} from "../hooks/useScrollAnimation";
import "./Projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "A modern e-commerce platform with user authentication, product catalog, shopping cart, and order management. Built with responsive design and modern web technologies.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&h=980&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      category: "fullstack",
      githubUrl: "https://github.com/DilmiJ/e-com-website",
    },
    {
      id: 2,
      title: "Skill Sharing Platform",
      description:
        "A React + Spring Boot-based social application for skill exchange. Features user authentication, skill matching, and real-time communication between users looking to share and learn skills.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&h=980&q=80",
      technologies: ["React", "Spring Boot", "Java", "MySQL"],
      category: "fullstack",
      githubUrl: "https://github.com/DilmiJ/skill-sharing-platform",
    },
    {
      id: 3,
      title: "Online Computer Store",
      description:
        "MERN-based inventory and quotation management system for computer hardware. Includes product catalog, inventory tracking, quotation generation, and order management.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&h=980&q=80",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      category: "fullstack",
      githubUrl: "https://github.com/DilmiJ/Online-computer-store---MERN-",
    },
    {
      id: 4,
      title: "Candy Crush Game",
      description:
        "A fun and interactive Candy Crush game built with modern web technologies. Features colorful graphics, smooth animations, score tracking, and engaging gameplay mechanics.",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&h=980&q=80",
      technologies: ["JavaScript", "HTML5", "CSS3", "Canvas"],
      category: "frontend",
      githubUrl: "https://github.com/DilmiJ/candy-crush",
    },
    {
      id: 5,
      title: "Todo App",
      description:
        "A clean and intuitive todo application for task management. Features include adding, editing, deleting tasks, marking as complete, and local storage for data persistence.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&h=980&q=80",
      technologies: ["React", "JavaScript", "CSS3", "Local Storage"],
      category: "frontend",
      githubUrl: "https://github.com/DilmiJ/Todo-app",
    },
  ];

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`filter-btn ${
                filter === category.key ? "active" : ""
              }`}
              onClick={() => setFilter(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-screenshot"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.githubUrl}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
