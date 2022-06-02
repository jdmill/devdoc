import { useEffect } from 'react';
import { useEditorContext } from "../../utils/EditorState";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECT } from "../../utils/queries";
// import { useState } from "react";
import { ADD_PROJECT, ADD_TO_PROJECT } from "../../utils/actions";

function ProjectEditor() {
  const [state, dispatch] = useEditorContext();
  const projectId = localStorage.getItem("projectId");

  //const [currentProject, setCurrentProject] = useState({});
  const { data } = useQuery(QUERY_PROJECT, {
    variables: {
      projectId: projectId,
    },
  });

  // trigger on component mount
  useEffect(() => {
    dispatch({ 
      type: ADD_PROJECT,
      project: data });
  }, [ data, dispatch ]);
  
  //console.log(`I am the data \n ${JSON.stringify(data)}`);

  console.log(`I am the global state \n ${JSON.stringify(state)}`);
  // console.log(state);

  return (
    <div className="gray__bg">
      <h2>I'm the project editor.</h2>
    </div>
  );
};

export default ProjectEditor;
