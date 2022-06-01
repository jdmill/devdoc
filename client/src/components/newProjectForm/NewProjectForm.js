import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PROJECT } from "../../utils/mutations";
import Auth from "../../utils/auth";

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
      <h2>Create New Project</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="newProjectForm">Project Title</label>
          <input
            id="projectTitleInput"
            type="text"
            name="projectTitle"
            value={projectTitle}
            placeholder="Project Title"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default NewProjectForm;
