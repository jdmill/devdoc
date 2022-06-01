import { useMutation } from "@apollo/client";
import { REMOVE_PROJECT } from "../../utils/mutations";

const ProjectList = ({ user }) => {
  const [removeProject, { error }] = useMutation(REMOVE_PROJECT);

  const HandleEditRequest = (e) => {
    const projectId = e.target.name;
    window.location.assign(`/app/projects/${projectId}`);
    console.log(`You clicked edit for project ID: ${projectId}`);
  };

  const HandleDeleteRequest = async (e) => {
    const projectId = e.target.name;
    console.log(`You clicked delete for project ID: ${projectId}`);
    console.log(user._id);

    await removeProject({
      variables: { userId: user._id, projectId: projectId },
    });
  };

  if (!user.projects.length) {
    return (
      <li className="list__item">
        <p className="project__title">no projects to show...</p>
      </li>
    );
  }

  return (
    <div>
      {user.projects &&
        user.projects.map((project) => (
          <li key={project._id} className="list__item">
            <p className="project__title">{project.projectTitle}</p>
            <div className="project__icons">
              <button
                className="list__btns edit"
                name={project._id}
                onClick={HandleEditRequest}
              >
                Edit
              </button>
              <button
                className="list__btns delete"
                name={project._id}
                onClick={HandleDeleteRequest}
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
