import { useEditorContext } from "../../utils/EditorState";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECT } from "../../utils/queries";
// import { useState } from "react";
//import { ADD_PROJECT } from "../../utils/actions";

function ProjectEditor() {
  const [state, dispatch] = useEditorContext();
  const projectId = localStorage.getItem("projectId");

  //const [currentProject, setCurrentProject] = useState({});
  const { data } = useQuery(QUERY_PROJECT, {
    variables: {
      projectId: projectId,
    },
  });
  console.log(data);

  dispatch({ project: data });

  console.log(state);

  return <h2>I'm the project editor.</h2>;
}

export default ProjectEditor;
