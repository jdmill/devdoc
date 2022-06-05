import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import {EDIT_COMPONENT} from '../../utils/mutations';
import './editorForm.css';

function EFArticlePhoto({ closeModal, projId, compId, compTitle, compText, compImage }) {
  const [editComponent, { error }] = useMutation(EDIT_COMPONENT);

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    setTitle(compTitle);
    setImageUrl(compImage);
    setText(compText);
  }, [])

  const handleChange = (e) => {
    if (e.target.id === "title") {
      setTitle(e.target.value);
    } else if (e.target.id === "imageUrl"){
      setImageUrl(e.target.value);
    } else {
      setText(e.target.value);
    }
  };

  const submitChanges = (e) => {
    e.preventDefault();
    editComponent({
      variables: {
        projectId: projId,
        componentId: compId,
        title: title,
        imageUrl: imageUrl,
        text: text
      }
    });
    closeModal(false)
    window.location.reload();
  };

  return (
    <div className="modal__backer">
      <div className="modal">
        <div className="card__header">
          <h2 className="card__title">Editing an Article (w/ photo)</h2>
        </div>
        <form className="modal__form" action="">
          <p>The <strong><em>Article Title</em></strong> value will serve as the title for this article entry. This will also be how you refer to this in your project tree.</p>
          <div>
            <label className="login__labels first__label" htmlFor="title">Article Title</label>
            <input
              className="login__input"
              id="title"
              type="text"
              name="article"
              onChange={handleChange}
              value={title}
            />
          </div>
          <p>The <strong><em>Image URL</em></strong> value can make a photo from the web into your article's image using the image's url(find an image you like online and right click then select "copy image location"). If you do not provide one, the header will not include an image. if you ever decide to NOT use an image for this article, you can submit a forward slash ('/') to remove the image again.</p>
          <div>
          <label className="login__labels first__label" htmlFor="imageUrl">Image URL</label>
          <input
            onChange={handleChange}
            className="login__input"
            id="imageUrl"
            type="text"
            value={imageUrl}
          />
          </div>
          <div>
          <label className="login__labels first__label" htmlFor="text">Article Text</label>
          <textarea
            onChange={handleChange}
            className="teaxtarea__labels"
            id="text"
            type="text"
            value={imageUrl}
            value={text}
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

export default EFArticlePhoto;
