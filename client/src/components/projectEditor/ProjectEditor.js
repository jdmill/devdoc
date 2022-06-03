import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEditorContext } from "../../utils/EditorState";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_PROJECT } from "../../utils/queries";
import { REMOVE_COMPONENT, EDIT_COMPONENT } from "../../utils/mutations";
// import { useState } from "react";
import { ADD_PROJECT, ADD_TO_PROJECT } from "../../utils/actions";
import Toolbox from "../toolbox/Toolbox";
import ProjectPreview from "../projectPreview/ProjectPreview";

import './projectEditor.css';

function ProjectEditor() {
  const [state, dispatch] = useEditorContext();
  // const projectId = localStorage.getItem("projectId");
  const projectId = useParams().projectId;

  // console.log(projectId);

  //const [currentProject, setCurrentProject] = useState({});
  const { loading, data } = useQuery(QUERY_PROJECT, {
    variables: {
      projectId: projectId,
    },
  });
  // console.log(data);

  // trigger on component mount
  useEffect(() => {
    if (!loading) {
      dispatch({
        type: ADD_PROJECT,
        project: data,
      });
    }
  }, [data, dispatch, loading]);

  const [ removeComponent, { error }] = useMutation(REMOVE_COMPONENT);
  const [ editComponent, { editError }] = useMutation(EDIT_COMPONENT);

  const HandleEditRequest = async (e) => {
    const componentId = e.target.name;

    await window.location.reload();
  };

  const HandleDeleteRequest = async (e) => {
    const componentId = e.target.name;
    await removeComponent({
      variables: { projectId: projectId, componentID: componentId },
    });
    await window.location.reload();
  };

  //console.log(`I am the data \n ${JSON.stringify(data)}`);

  // console.log(`I am the global state \n ${JSON.stringify(state)}`);
  // console.log(state);

  return (
    <div className="gray__bg">
      <div className="editor">
        {loading ? (
          <div className="left__card">Loading...</div>
        ) : (
          <section className="project__tree left__card">
            <h2 className="card__header card__title">{state && state.projects.project.projectTitle}</h2>
            <ul className="project__list">
              {state && state.projects.project.componentArray.map((component) => {
                return (
                  <li className="list__item" key={component._id} name={component._id}>
                    <p className="project__title">{component.title}</p>
                    <div className="project__icons">
                      <button
                        className="list__btns edit"
                        name={component._id}
                        onClick={HandleEditRequest}
                      >
                        Edit
                      </button>
                      <button
                        className="list__btns delete"
                        name={component._id}
                        onClick={HandleDeleteRequest}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                )
              })}
            </ul>
          </section>
        )}
        <div className="right__side">
          <div className="top__card">
            <div className="card__header">
            <h2 className="card__title">
              Your Toolbox! Click any component to add it to your project
            </h2>
            </div>
            <Toolbox />
          </div>
          <div className="bottom__card">
            <div className="card__header">
              <h2 className="card__title">Project Preview</h2>
            </div>
            <ProjectPreview />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectEditor;
