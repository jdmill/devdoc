import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import {EDIT_COMPONENT} from '../../utils/mutations';
import './editorForm.css';

function EFHeader({ closeModal, projId, compId, compTitle, compImage }) {
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

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setTitle(compTitle);
    setImageUrl(compImage);
  }, [])

  const [editComponent, { error }] = useMutation(EDIT_COMPONENT);

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
    closeModal(false)
    window.location.reload();
  };

  return (
    <div className="modal__backer">
      <div className="modal">
      <div className="card__header">
          <h2 className="card__title">Editing Header</h2>
        </div>
        <form className="modal__form" action="">
          <p>The <strong><em>Header Title</em></strong> value will serve as the main title for your entire web page and is displayed in the top left corner fo your site's header. This will also be how you refer to this in your project tree. Keep in mind this title displays fairly large so Dev Doctor recommends less than 60 characters for this. You can exceed this character count but it is not recommended.</p>
          <label className="login__labels first__label" htmlFor="title">Header Title</label>
          <input
            onChange={handleChange}
            className="login__input"
            id="title"
            type="text"
            value={title}
          />
          <p className="char__counter" style={(title.length <= 60 ? styles.counterUnder : styles.counterOver)}>Characters used {title.length}/60</p>
          <p>The <strong><em>Hero Image URL</em></strong> value can make a photo from the web into your hero image using the image's url(find an image you like online and right click then select "copy image location"). If you do not provide one, the header will not include a hero image. if you ever decide to NOT use a hero image, you can submit a forward slash ('/') to remove the image again.</p>
          <label className="login__labels first__label" htmlFor="imageUrl">Hero Image URL</label>
          <input
            onChange={handleChange}
            className="login__input url__input"
            id="imageUrl"
            type="text"
            value={imageUrl}
          />
          <div className="EF__buttons">
            <button className="cancel__button" onClick={() => closeModal(false)}>
              Cancel
            </button>
            <button className="toolbox__button" onClick={submitChanges}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EFHeader;
