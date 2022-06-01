import React from "react";

import { useQuery } from "@apollo/client";
import NewProjectForm from "../newProjectForm/NewProjectForm";

import ProjectList from "../ProjectList/ProjectList";
import { QUERY_USER } from "../../utils/queries";

import Auth from "../../utils/auth";

import styles from './myProjects.css';

function MyProjects() {
  const user_id = Auth.getUser().data._id;

  const { data } = useQuery(QUERY_USER, {
    variables: {
      userId: user_id,
    },
  });

  console.log(data);

  if (!data) {
    return <h2>You need to be logged in to view your Projects!</h2>;
  }

  return (
    <div className="gray__bg">
        <section className="list__card">
            <div className="card__header">
                <h2 className="card__title">My Projects</h2>
            </div>
            <ul className="project__list">
            <ProjectList projects={data.user.projects} />
            </ul>
            <NewProjectForm />
        </section>
    </div>
  );
}

export default MyProjects;
