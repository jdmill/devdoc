import React from "react";

import { useQuery } from "@apollo/client";
import NewProjectForm from "../newProjectForm/NewProjectForm";
import ProjectList from "../ProjectList/ProjectList";
import { QUERY_USER } from "../../utils/queries";

import Auth from "../../utils/auth";

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
        <ProjectList projects={data.user.projects} />
      </ul>
    </div>
  );
}

export default MyProjects;
