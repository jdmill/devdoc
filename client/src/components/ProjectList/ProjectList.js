import { useMutation } from "@apollo/client";
import { REMOVE_PROJECT } from "../../utils/mutations";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECT } from "../../utils/queries";

const ProjectList = ({ user }) => {
  const [removeProject, { error }] = useMutation(REMOVE_PROJECT);

  const HandleEditRequest = async (e) => {
    const projectId = e.target.name;
    try {
      const prevProj = await localStorage.getItem("projectId");
      if (prevProj) {
        localStorage.removeItem("projectId");
      }
    } catch (err) {
      console.log("no existing project");
    }
    localStorage.setItem("projectId", projectId);
    await window.location.assign(`/app/projects/${projectId}`);
    //console.log(`You clicked edit for project ID: ${projectId}`);
  };

  const HandleDeleteRequest = async (e) => {
    const projectId = e.target.name;
    //console.log(`You clicked delete for project ID: ${projectId}`);
    //console.log(user._id);

    await removeProject({
      variables: { userId: user._id, projectId: projectId },
    });
    await window.location.reload();
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
                <AiFillEdit size={20} />
              </button>
              <button
                className="list__btns delete"
                name={project._id}
                onClick={HandleDeleteRequest}
              >
                <AiFillDelete size={20} />
              </button>
            </div>
          </li>
        ))}
    </div>
  );
};

export default ProjectList;
