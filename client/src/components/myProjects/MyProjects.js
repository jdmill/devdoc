import React from "react";
import NewProjectForm from "../newProjectForm/NewProjectForm";
function MyProjects() {
  /*
    const handleEditRequest(e) => {
        cont id = e.target.name
        window.location.href = `/app/projects/${id}`;
    };

    const handleDeleteRequest(e) => {
        cont id = e.target.name
        Mutation -> DELETE PROJECT -> User.findOneAndUpdate()......
    };
    */

  return (
    <div className="container">
      <NewProjectForm />

      <h2>list of projects</h2>
      <ul className="project__list">
        {/* projects.map((project) => {
                    <li>
                        <div classNAme="project__item">
                            <p className="project__title">{project.name}</p>
                            <div className="project__icons">
                                <button
                                    name={project.id}
                                    onClick={handleEditRequest}
                                >
                                    Edit
                                </button>
                                <button
                                    name={project.id}
                                    onClick={handleDeleteRequest}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </li>
                }) */}
      </ul>
    </div>
  );
}

export default MyProjects;
