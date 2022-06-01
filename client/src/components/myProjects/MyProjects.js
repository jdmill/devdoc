import React from "react";
import NewProjectForm from "../newProjectForm/NewProjectForm";
import styles from './myProjects.css';


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
    <div className="gray__bg">
        <section className="list__card">
            <div className="card__header">
                <h2 className="card__title">My Projects</h2>
            </div>
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
                <li className="list__item">
                    <p className="project__title">Toy Factory</p>
                    <div className="project__icons">
                        <button className="list__btns edit"
                            name="project1"
                        >
                            Edit
                        </button>
                        <button className="list__btns delete"
                            name="project1"
                        >
                            Delete
                        </button>
                    </div>
                </li>
                <li className="list__item">
                    <p className="project__title">Nexus</p>
                    <div className="project__icons">
                        <button className="list__btns edit"
                            name="project2"
                        >
                            Edit
                        </button>
                        <button className="list__btns delete"
                            name="project2"
                        >
                            Delete
                        </button>
                    </div>
                </li>
                <li className="list__item">
                    <p className="project__title">Soap Shop</p>
                    <div className="project__icons">
                        <button className="list__btns edit"
                            name="project3"
                        >
                            Edit
                        </button>
                        <button className="list__btns delete"
                            name="project3"
                        >
                            Delete
                        </button>
                    </div>
                </li>
            </ul>
            <NewProjectForm />
        </section>
    </div>
  );
}

export default MyProjects;
