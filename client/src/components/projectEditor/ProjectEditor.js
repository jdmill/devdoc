import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useEditorContext } from "../../utils/EditorState";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_PROJECT } from "../../utils/queries";
import { REMOVE_COMPONENT } from "../../utils/mutations";
// import { useState } from "react";
import { ADD_PROJECT } from "../../utils/actions";
import Toolbox from "../toolbox/Toolbox";
import ProjectPreview from "../projectPreview/ProjectPreview";
import EFArticlePhoto from "../editorForm/EFArticle-photo";
import EFContact from "../editorForm/EFContact";
import EFFooter from "../editorForm/EFFooter";
import EFHeader from "../editorForm/EFHeader";
import CodeBlock from "../codeBlock/CodeBlock";

import "./projectEditor.css";

function ProjectEditor() {
  const [state, dispatch] = useEditorContext();
  const [openModal, setOpenModal] = useState(false);
  const [targetId, setTargetId] = useState();
  const [activeCode, setActiveCode] = useState('Click the render(rend) button next to a component to see its code...');
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

  const HandleEditRequest = async (e) => {
    const componentId = e.target.name;
    setTargetId(componentId);
    setOpenModal(true);
  };

  const HandleDeleteRequest = async (e) => {
    const componentId = e.target.name;
    await removeComponent({
      variables: { projectId: projectId, componentId: componentId },
    });
    await window.location.reload();
  };

  const [currentTheme, setCurrentTheme] = useState('Elegant');  

  const changeTheme = (e) => {
    setCurrentTheme(e.target.name);
  }

  const [thisCompTitle, setThisCompTitle] = useState();
  const [thisCompType, setThisCompType] = useState();
  const [thisCompImage, setThisCompImage] = useState();
  const [thisCompText, setThisCompText] = useState();

  const renderComp = (e) => {
    if (activeCode !== '// Click This Box to select all of the code needed to make the component being previewed so you can copy it ') {
    setActiveCode('// Click This Box to select all of the code needed to make the component being previewed so you can copy it ')
    setThisCompTitle(e.target.dataset.comptitle);
    setThisCompType(e.target.dataset.comptype);
    setThisCompImage(e.target.dataset.compimage);
    setThisCompText(e.target.dataset.comptext);
  } else {
    setActiveCode('Click the render(rend) button next to a component to see its code...');
    setThisCompTitle();
    setThisCompType();
    setThisCompImage();
    setThisCompText();
  }
  };

  return (
    <div className="gray__bg">
      <div className="editor">
        <div className="left__side">
          {loading ? (
            <div className="left__card">Loading...</div>
          ) : (
            <section className="project__tree left__card">
              <h2 className="card__header card__title">
                {state && state.projects.project.projectTitle}: Project Tree
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
                        <p className="project__title">{component.title} <span className="comp__type__label">({component.compType})</span></p>
                        <div className="project__icons">
                          <button
                            className="comp__list__btns render"
                            onClick={renderComp}
                            data-comptitle={component.title}
                            data-comptype={component.compType}
                            data-compimage={component.imageUrl}
                            data-comptext={component.text}
                          >
                            Rend
                          </button>
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
                            Del
                          </button>
                          <div>
                            {openModal &&
                            component.compType === "header" &&
                            targetId === component._id ? (
                              <EFHeader
                                projId={projectId}
                                compId={component._id}
                                closeModal={setOpenModal}
                                compTitle={component.title}
                                compImage={component.imageUrl}
                                />
                            ) : null}
                            {openModal &&
                            component.compType === "footer" &&
                            targetId === component._id ? (
                              <EFFooter
                                projId={projectId}
                                compId={component._id}
                                closeModal={setOpenModal}
                                compTitle={component.title}
                                compText={component.text}
                                />
                            ) : null}
                            {openModal &&
                            component.compType === "article-photo" &&
                            targetId === component._id ? (
                              <EFArticlePhoto
                                projId={projectId}
                                compId={component._id}
                                closeModal={setOpenModal}
                                compTitle={component.title}
                                compImage={component.imageUrl}
                                compText={component.text}
                                />
                            ) : null}
                            {openModal &&
                            component.compType === "contact" &&
                            targetId === component._id ? (
                              <EFContact
                                projId={projectId}
                                compId={component._id}
                                closeModal={setOpenModal}
                                compTitle={component.title}
                                compText={component.text}
                                />
                            ) : null}
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </section>
          )}
          {/* TODO: give this codeblock a string containing the code for a component when the "render" button is clicked for a component Clicking render should also target a className "visible" so the code block only appears when it has content in it */} 
          <CodeBlock
            compTitle={thisCompTitle}
            compType={thisCompType}
            compImage={thisCompImage}
            compText={thisCompText}
            compTheme={currentTheme}
            str={activeCode}
          />
        </div>
        <div className="right__side">
          <div className="top__card">
            <div className="card__header">
              <h2 className="card__title">
                Your Toolbox!
              </h2>
            </div>
            <p className="tag">Click any component to add it to your project</p>
            <Toolbox/>
            <div className="card__header">
              <h2 className="card__title">
                Theme Selector
              </h2>
            </div>
            <p className="tag">Current Theme: {currentTheme}</p>
            <div className="button__pool">
              <button name="Elegant" className="toolbox__button" onClick={changeTheme}>Elegant</button>
              <button name="Fantasy" className="toolbox__button" onClick={changeTheme}>Fantasy</button>
              <button name="Navy" className="toolbox__button" onClick={changeTheme}>Navy</button>
              <button name="News" className="toolbox__button" onClick={changeTheme}>News</button>
              <button name="Tech" className="toolbox__button" onClick={changeTheme}>Tech</button>
              <button name="Whimsical" className="toolbox__button" onClick={changeTheme}>Whimsical</button>
            </div>
          </div>
          <div className="bottom__card">
            <div className="card__header">
              <h2 className="card__title">Project Preview</h2>
            </div>
            <ProjectPreview 
              compTitle={thisCompTitle}
              compType={thisCompType}
              compImage={thisCompImage}
              compText={thisCompText}
              compTheme={currentTheme}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectEditor;
