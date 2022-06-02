import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useEditorContext } from "../../utils/EditorState";
import { ADD_COMPONENT } from "../../utils/mutations";

function Toolbox() {
  const [state, dispatch] = useEditorContext();
  const projectId = useParams().projectId
  const [ addComponent, { error }] = useMutation(ADD_COMPONENT);

  const addComp = async (projId, compType, contact) => {
    try {
      // Execute mutation and pass in defined parameter data as variables
      const { data } = await addComponent({
        variables: {
          projectId: projId, // right hand values are from parameter/argument passed in
          compType: compType,
          contact: contact
        },
      });
      window.location.assign(`/app/projects/${projId}`);
    } catch (err) {
      console.error(err);
    };
  };
  
  function addArticle() {
    addComp(projectId, "article-photo", false);
  };
  function addFooter() {
    addComp(projectId, "footer", false);
  };
  function addHeader() {
    addComp(projectId, "header", false);
  };
  function addContact() {
    addComp(projectId, "contact", true);
  };

  return (
    <div className="container">
      <h2 className="topLineContainer">
        Your Toolbox! Click any component to add it to your project
      </h2>
      <ul className="button-group">
        {/* Here we use the map method to return each component that the user may select */}
        <li>
          <button onClick={addHeader} className="button-group-item">
            Header
          </button>
        </li>
        <li>
          <button onClick={addFooter} className="button-group-item">
            Footer
          </button>
        </li>
        <li>
          <button onClick={addArticle} className="button-group-item">
            Article
          </button>
        </li>
        <li>
          <button onClick={addContact} className="button-group-item">
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Toolbox;
