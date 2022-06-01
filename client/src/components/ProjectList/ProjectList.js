import React from "react";
// import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  const handleEditRequest = (e) => {
    const id = e.target.name;
    console.log(`You clicked edit for project ID: ${id}`);
};

const handleDeleteRequest = (e) => {
    const id = e.target.name
    console.log(`You clicked delete for project ID: ${id}`);
};
  
  if (!projects.length) {
    return (
      <li className="list__item">
        <p className="project__title">no projects to show...</p>
      </li>
    );
  };

  return (
    <div>
      {projects &&
        projects.map((project) => (
          <div key={project._id}>
            <li className="list__item">
                    <p className="project__title">{project.projectTitle}</p>
                    <div className="project__icons">
                        <button className="list__btns edit"
                            name={project.id}
                            onClick={handleEditRequest}
                        >
                            Edit
                        </button>
                        <button className="list__btns delete"
                            name={project.id}
                            onClick={handleDeleteRequest}
                        >
                            Delete
                        </button>
                    </div>
                </li>
          </div>
        ))}
    </div>
  );
};

export default ProjectList;
