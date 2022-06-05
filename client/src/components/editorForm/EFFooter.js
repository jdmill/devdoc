import { useState, useEffect} from "react";
import { useMutation } from "@apollo/client";
import {EDIT_COMPONENT} from '../../utils/mutations';
import './editorForm.css';

function EFFooter({ closeModal, projId, compId, compTitle, compText }) {
  const styles = {
    counterOver: {
      color: '#FF0000',
      background: '#000000',
      padding: '.5rem 0.5rem',
      borderRadius: '0.5em',
      width: 'fit-content'
    },
    counterUnder: {
      color: "#00FF00",
      background: '#000000',
      padding: '.5rem 0.5rem',
      borderRadius: '0.5em',
      width: 'fit-content'
    },
  };

  const [editComponent, { error }] = useMutation(EDIT_COMPONENT);

  const [title, setTitle] = useState("");
  const [contributions, setContributions] = useState("");

  useEffect(() => {
    setTitle(compTitle);
    setContributions(compText);
  }, [])

  const handleChange = (e) => {
    if (e.target.id === "title") {
      setTitle(e.target.value);
    } else {
      setContributions(e.target.value);
    }
  };

  const submitChanges = (e) => {
    e.preventDefault();
    editComponent({
      variables: {
        projectId: projId,
        componentId: compId,
        title: title,
        text: contributions
      }
    });
    closeModal(false)
    window.location.reload();
  };

  return (
    <div className="modal__backer">
      <div className="modal">
      <div className="card__header">
          <h2 className="card__title">Editing Footer</h2>
        </div>
        <form className="modal__form" action="">
          <p>Any field left blank will <strong>NOT</strong> be updated. Dev Doctor does this to prevent accidentally losing information when you only want to change one thing. If you wish to change a current field to a blank one, simply submit one space bar press (" ").</p>
          <p>The <strong><em>Copyright</em></strong> value can be a year, or specific date the site was established. This will be displayed in the footer of the page. This information will also be used to track the footer component in your project tree.</p>
          <div>
            <label className="login__labels first__label" htmlFor="copyRight">Copyright</label>
            <input
              className="login__input"
              id="title"
              type="text"
              name="copyRight"
              placeholder="Copy Right"
              onChange={handleChange}
              value={title}
            />
          </div>
          <p>The <strong><em>Attributed To</em></strong> value is for you to add information to your footer about your company. It can be a company name, or the names of the members of your team. Its meant to display in a header so Dev Doctor recommends less than 100 characters for this.You can exceed this character count but it is not recommended.</p>
          <div>
            <label className="login__labels first__label" htmlFor="attributed">Attributed To</label>
            <input
              className="login__input"
              id="text"
              type="text"
              name="attributed"
              onChange={handleChange}
              value={contributions}
            />
            <p className="char__counter" style={(title.length <= 100 ? styles.counterUnder : styles.counterOver)}>Characters used {contributions.length}/100</p>
          </div>
          <div className="EF__buttons">
            <button className="cancel__button" onClick={() => closeModal(false)}>
              Cancel
            </button>
            <button className="toolbox__button" type="submit" onClick={submitChanges}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EFFooter;
