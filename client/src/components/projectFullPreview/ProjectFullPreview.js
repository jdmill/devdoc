import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEditorContext } from "../../utils/EditorState";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECT } from "../../utils/queries";
import { ADD_PROJECT } from "../../utils/actions";
import ProjectPreview from "../projectPreview/ProjectPreview";
import '../../userComps/css/DevDr.css';

function ProjectFullPreview () {
    const [state, dispatch] = useEditorContext();
    const projectId = useParams().projectId;
    const currentTheme = useParams().theme
    const { loading, data } = useQuery(QUERY_PROJECT, {
        variables: {
          projectId: projectId,
        },
      });

      useEffect(() => {
        if (!loading) {
          dispatch({
            type: ADD_PROJECT,
            project: data,
          });
        }
      }, [data, dispatch, loading]);

    return (
        <div className="full__screen">
            <div>
            {loading ? (
                <div className="left__card">Loading...</div>
            ) : (
                <div>
                    {state &&
                    state.projects.project.componentArray.map((component) => {
                        return (
                            <ProjectPreview
                                compTitle={component.title}
                                compType={component.compType}
                                compImage={component.imageUrl}
                                compText={component.text}
                                compTheme={currentTheme}
                                key={component._id}
                            />
                        )
                  })};
                </div>
            )}
            </div>
        </div>
    );
};

export default ProjectFullPreview;