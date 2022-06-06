import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useEditorContext } from "../../utils/EditorState";
import { ADD_COMPONENT } from "../../utils/mutations";
import "./toolbox.css";

function Toolbox() {
  const projectId = useParams().projectId;
  const [addComponent, { error }] = useMutation(ADD_COMPONENT);

  const addComp = async (projId, title, compType, contact) => {
    try {
      // Execute mutation and pass in defined parameter data as variables
      const { data } = await addComponent({
        variables: {
          title: title,
          projectId: projId, // right hand values are from parameter/argument passed in
          compType: compType,
          contact: contact,
        },
      });
      window.location.assign(`/app/projects/${projId}`);
    } catch (err) {
      console.error(err);
    }
  };

  function addArticle() {
    addComp(projectId, "new article", "article-photo", false);
  }
  function addFooter() {
    addComp(projectId, "new footer", "footer", false);
  }
  function addHeader() {
    addComp(projectId, "new header", "header", false);
  }
  function addContact() {
    addComp(projectId, "new contact", "contact", true);
  }

  return (
    <ul className="button__pool">
      {/* Here we use the map method to return each component that the user may select */}
      <li>
        <button onClick={addHeader} className="toolbox__button">
          Header
        </button>
      </li>
      <li>
        <button onClick={addFooter} className="toolbox__button">
          Footer
        </button>
      </li>
      <li>
        <button onClick={addArticle} className="toolbox__button">
          Article
        </button>
      </li>
      <li>
        <button onClick={addContact} className="toolbox__button">
          Contact
        </button>
      </li>
    </ul>
  );
}

export default Toolbox;
