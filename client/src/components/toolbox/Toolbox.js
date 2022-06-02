import { useEditorContext } from "../../utils/EditorState";

function Toolbox() {
  const [state, dispatch] = useEditorContext();
  console.log(state);
  function addArticle() {
    localStorage.setItem("compType", "article");
    window.location.assign(
      `/app/projects/${state.project._id}/articleComponentForm`
    );
  }
  function addFooter() {
    localStorage.setItem("compType", "footer");
    window.location.assign(
      `/app/projects/${state.project._id}/footerComponentForm`
    );
  }
  function addHeader() {
    localStorage.setItem("compType", "header");
    window.location.assign(
      `/app/projects/${state.project._id}/headerComponentForm`
    );
  }
  function addContact() {
    localStorage.setItem("compType", "contact");
    window.location.assign(
      `/app/projects/${state.project._id}/contactComponentForm`
    );
  }

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
