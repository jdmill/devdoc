import { useState } from "react";
import { Link } from "react-router-dom";

function EFArticlePhoto() {
  const [formState, setFormState] = useState({
    imgURL: "",
    article: "",
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
      <h2>A form for editing an article w/ photo component</h2>
      <div>
        <label htmlFor="imgUrl">Image URL</label>
        <input
          className="full-width-input"
          id="imgURL"
          type="text"
          name="imgURL"
          placeholder="Image URL"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="article">Article</label>
        <textarea
          className="full-width-input"
          id="article"
          type="text"
          name="article"
          onChange={handleChange}
        />
      </div>
      <div>
        <button className="submit__btn" type="submit">
          Submit
        </button>
      </div>
      <button className="cancel">
        <Link to="/../app/projects/project"> Cancel </Link>
      </button>
    </form>
  );
}

export default EFArticlePhoto;
