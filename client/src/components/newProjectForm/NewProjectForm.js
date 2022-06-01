import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PROJECT } from "../../utils/mutations";
import Auth from "../../utils/auth";
import styles from './newProjectForm.css';

function NewProjectForm() {
  const [projectTitle, setFormState] = useState("");
  const [addProject] = useMutation(ADD_PROJECT);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "projectTitle") {
      setFormState(value);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const user_id = Auth.getUser().data._id;
    console.log(user_id);
    console.log(projectTitle);
    try {
      await addProject({
        variables: {
          projectTitle: projectTitle,
          userId: user_id,
        },
      });

      setFormState("");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <section className="new_project_card">
      <div className="card__header">
                <h2 className="card__title">Create a New Project</h2>
            </div>
      <form onSubmit={handleFormSubmit}>
        <div className="new__proj__form">
          <label  className="new__proj__labels" htmlFor="newProjectForm">Project Title</label>
          <input
            className="new__proj__input"
            id="projectTitleInput"
            type="text"
            name="projectTitle"
            value={projectTitle}
            placeholder="Project Title"
            onChange={handleChange}
          />
          <button className="new__proj__btn" type="submit">
            New Project
          </button>
        </div>
      </form>
    </section>
  );
}

export default NewProjectForm;
