import { useEditorContext } from "../../utils/GlobalState";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECT } from "../../utils/queries";
import { useEffect, useState } from "react";

function ProjectEditor() {
  const [state, dispatch] = useEditorContext();
  const projectId = localStorage.getItem("projectId");
  const { data } = useQuery(QUERY_PROJECT, {
    variables: {
      projectId: projectId,
    },
  });
  console.log(data);
  return <h2>I'm the project editor.</h2>;
}

export default ProjectEditor;
