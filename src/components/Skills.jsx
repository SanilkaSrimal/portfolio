import React from "react";
import {
  useScrollAnimation,
  useStaggerAnimation,
} from "../hooks/useScrollAnimation";
import "./Skills.css";

const Skills = () => {
  const headerRef = useScrollAnimation("fadeInUp");
  const skillsGridRef = useStaggerAnimation(".skill-category", "scaleIn");
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Java", level: 85 },
        { name: "Python", level: 80 },
        { name: "PHP", level: 75 },
        { name: "SQL", level: 85 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", level: 90 },
        { name: "React Native", level: 85 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "Spring Boot", level: 80 },
        { name: "TypeScript", level: 80 },
      ],
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "NetBeans", level: 80 },
        { name: "Project Management", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header" ref={headerRef}>
          <h2>Skills & Technologies</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>

        <div className="skills-grid" ref={skillsGridRef}>
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
