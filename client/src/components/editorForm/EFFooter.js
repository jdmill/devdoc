import { useState } from "react";
import { Link } from "react-router-dom";

function EFFooter({ closeModal }) {
  const [formState, setFormState] = useState({
    copyRight: "",
    attributed: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <form action="">
      <h2>A form for editing a footer component</h2>
      <div>
        <label htmlFor="copyRight">Copy Right</label>
        <input
          className="full-width-input"
          id="copyRight"
          type="text"
          name="copyRight"
          placeholder="Copy Right"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="attributed">Attributed To</label>
        <input
          className="full-width-input"
          id="title"
          type="text"
          name="attributed"
          onChange={handleChange}
        />
      </div>
      <div>
        <button className="submit__btn" type="submit">
          Submit
        </button>
      </div>
      <button className="cancel" onClick={() => closeModal(false)}>
        Cancel
      </button>
    </form>
  );
}

export default EFFooter;
