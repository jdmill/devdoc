import { useEffect } from "react";
import { useEditorContext } from "../../utils/EditorState";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECT } from "../../utils/queries";
// import { useState } from "react";
import { ADD_PROJECT, ADD_TO_PROJECT } from "../../utils/actions";
import Toolbox from "../toolbox/Toolbox";
import ProjectPreview from "../projectPreview/ProjectPreview";

function ProjectEditor() {
  const [state, dispatch] = useEditorContext();
  const projectId = localStorage.getItem("projectId");

  //const [currentProject, setCurrentProject] = useState({});
  const { loading, data } = useQuery(QUERY_PROJECT, {
    variables: {
      projectId: projectId,
    },
  });

  // trigger on component mount
  useEffect(() => {
    if (!loading) {
      dispatch({
        type: ADD_PROJECT,
        project: data,
      });
    };
  }, [data, dispatch]);

  //console.log(`I am the data \n ${JSON.stringify(data)}`);

  console.log(`I am the global state \n ${JSON.stringify(state)}`);
  // console.log(state);

  return (
    <div className="gray__bg">
      <Toolbox />
      {loading ? (
            <div>Loading...</div>
          ) : (
            <h2>{state && state.projects.project.projectTitle}</h2>
          )}
      <ProjectPreview />
    </div>
  );
}

export default ProjectEditor;
