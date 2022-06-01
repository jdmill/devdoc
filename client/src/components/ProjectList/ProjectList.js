import React from "react";
// import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  if (!projects.length) {
    return <h2>No Projects Yet</h2>;
  }

  return (
    <div>
      {projects &&
        projects.map((project) => (
          <div key={project._id}>
            <div>
              <p>{project.projectTitle}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProjectList;
