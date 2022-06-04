import { useState, } from "react";
import { useMutation } from "@apollo/client";
import {EDIT_COMPONENT} from '../../utils/mutations';

function EFHeader({ closeModal, projId, compId }) {
  const [editComponent, { error }] = useMutation(EDIT_COMPONENT);

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleChange = (e) => {
    if (e.target.id === "title") {
      setTitle(e.target.value);
    } else {
      setImageUrl(e.target.value);
    }
  };

  const submitChanges = (e) => {
    e.preventDefault();
    editComponent({
      variables: {
        projectId: projId,
        componentId: compId,
        title: title,
        imageUrl: imageUrl
      }
    });
    window.location.reload();
  };

  return (
    <form action="">
      <h2>A form for editing a header component</h2>
      <label htmlFor="title">Header Title</label>
      <input
        onChange={handleChange}
        className="full-width-input"
        id="title"
        type="text"
        value={title}
      />
      <label htmlFor="title">Hero Image URL</label>
      <input
        onChange={handleChange}
        className="full-width-input"
        id="imageUrl"
        type="text"
        value={imageUrl}
      />
      <button className="cancel" onClick={() => closeModal(false)}>
        Cancel
      </button>
      <button className="submit" onClick={submitChanges}>
        Submit
      </button>
    </form>
  );
}

export default EFHeader;
