import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import {EDIT_COMPONENT} from '../../utils/mutations';
import './editorForm.css';

function EFContact({ closeModal, projId, compId, compTitle, compText }) {
  const [editComponent, { error }] = useMutation(EDIT_COMPONENT);

  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setTitle(compTitle);
    setEmail(compText);
  }, [])

  const handleChange = (e) => {
    if (e.target.id === "title") {
      setTitle(e.target.value);
    } else {
      setEmail(e.target.value);
    }
  };

  const submitChanges = (e) => {
    e.preventDefault();
    editComponent({
      variables: {
        projectId: projId,
        componentId: compId,
        title: title,
        text: email
      }
    });
    closeModal(false)
    window.location.reload();
  };


  return (
    <div className="modal__backer">
      <div className="modal">
      <div className="card__header">
          <h2 className="card__title">Editing Contact Form</h2>
        </div>
        <form className="modal__form"action="">
          <p>The <strong><em>Form Title</em></strong> will give this contact form a name. You users will see the title at the top of the contact form, and you will be able to reference it in the project tree by this name.</p>
          <div>
            <label className="login__labels first__label" htmlFor="title">Form Title</label>
            <input
              className="login__input"
              id="title"
              type="text"
              name="title"
              onChange={handleChange}
              value={title}
            />
          </div>
          <p>The <strong><em>Email</em></strong> field is for you to put <strong><em>your</em></strong> email address into. When someone fills out your form, an email with the <strong><em>Form Title</em></strong> as the subject line will be sent to your email address</p>
          <div>
            <label className="login__labels first__label" htmlFor="email">Email</label>
            <input
              className="login__input"
              id="email"
              type="text"
              name="email"
              onChange={handleChange}
              value={email}
            />
          </div>
          <div className="EF__buttons">
            <div>
              <button className="cancel__button" onClick={() => closeModal(false)}>
              Cancel
            </button>
              <button className="toolbox__button" type="submit" onClick={submitChanges}>
                  Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EFContact;
