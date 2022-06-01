import React from "react";
// import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  const handleEditRequest = (e) => {
    const id = e.target.name;
    console.log(`You clicked edit for project ID: ${id}`);
  };

  const handleDeleteRequest = (e) => {
    const id = e.target.name;
    console.log(`You clicked delete for project ID: ${id}`);
  };

  if (!projects.length) {
    return (
      <li className="list__item">
        <p className="project__title">no projects to show...</p>
      </li>
    );
  }

  return (
    <div>
      {projects &&
        projects.map((project) => (
          <li key={project._id} className="list__item">
            <p className="project__title">{project.projectTitle}</p>
            <div className="project__icons">
              <button
                className="list__btns edit"
                name={project._id}
                onClick={handleEditRequest}
              >
                Edit
              </button>
              <button
                className="list__btns delete"
                name={project._id}
                onClick={handleDeleteRequest}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
    </div>
  );
};

export default ProjectList;
