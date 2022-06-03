import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useEditorContext } from "../../utils/EditorState";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_PROJECT } from "../../utils/queries";
import { REMOVE_COMPONENT, EDIT_COMPONENT } from "../../utils/mutations";
// import { useState } from "react";
import { ADD_PROJECT } from "../../utils/actions";
import Toolbox from "../toolbox/Toolbox";
import ProjectPreview from "../projectPreview/ProjectPreview";
import EFArticlePhoto from "../editorForm/EFArticle-photo";
import EFContact from "../editorForm/EFContact";
import EFFooter from "../editorForm/EFFooter";
import EFHeader from "../editorForm/EFHeader";

import "./projectEditor.css";

function ProjectEditor() {
  const [state, dispatch] = useEditorContext();
  const [openModal, setOpenModal] = useState(false);
  const [targetId, setTargetId] = useState();
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

  const [removeComponent, { error }] = useMutation(REMOVE_COMPONENT);
  const [editComponent, { editError }] = useMutation(EDIT_COMPONENT);

  const HandleEditRequest = async (e) => {
    const componentId = e.target.name;
    setTargetId(componentId);
    const compType = e.target.value;
    setOpenModal(true);

    // switch (compType) {
    //   case "header":
    //     Modal = <EFHeader />;
    //     setOpenModal(true);
    //     break;
    //   case "footer":
    //     Modal = <EFFooter />;
    //     setOpenModal(true);
    //     break;
    //   case "contact":
    //     Modal = <EFContact />;
    //     setOpenModal(true);
    //     break;
    //   case "article-photo":
    //     Modal = <EFArticlePhoto />;
    //     setOpenModal(true);
    //     break;
    //   default:
    //     break;

    // await window.location.reload();
  };

  const HandleDeleteRequest = async (e) => {
    const componentId = e.target.name;
    await removeComponent({
      variables: { projectId: projectId, componentId: componentId },
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
            <h2 className="card__header card__title">
              {state && state.projects.project.projectTitle}
            </h2>
            <ul className="project__list">

              {state &&
                state.projects.project.componentArray.map((component) => {
                  return (
                    <li
                      className="list__item"
                      key={component._id}
                      name={component._id}
                    >
                      <p className="project__title">{component.title}</p>
                      <div className="project__icons">
                        <button
                          className="list__btns edit"
                          name={component._id}
                          value={component.compType}
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
                        <div className="modal">
                          {openModal &&
                          component.compType === "header" &&
                          targetId === component._id ? (
                            <EFHeader />
                          ) : null}
                          {openModal &&
                          component.compType === "footer" &&
                          targetId === component._id ? (
                            <EFFooter />
                          ) : null}
                          {openModal &&
                          component.compType === "article-photo" &&
                          targetId === component._id ? (
                            <EFArticlePhoto />
                          ) : null}
                          {openModal &&
                          component.compType === "contact" &&
                          targetId === component._id ? (
                            <EFContact />
                          ) : null}
                        </div>
                      </div>
                    </li>
                  );
                })}

            </ul>
          </section>
        )}
        <div className="right__side">
          <div className="top__card">
            <div className="card__header">

            <h2 className="card__title">
              Your Toolbox!
            </h2>
            </div>
            <Toolbox />
            <p className="tag">Click any component to add it to your project</p>
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
