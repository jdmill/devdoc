import { useState } from "react";

function EFHeader({ openModal }) {
  // TODO: make this next line grab the title properties from this component by ID using a graphQL query
  // const userLinks = [links,setLinks] = useState(User.findById(:projectID/:componentId));

  // TODO: make this next line grab the links properties from this component by ID using a graphQL query
  // const userLinks = [links,setLinks] = useState(User.findById(:projectID/:componentId));
  const placeholderLinks = [
    // TODO: replace this placeholder array with the one from the DB
    {
      title: "About",
      location: "#about",
    },
    {
      title: "Contact",
      location: "#contact",
    },
  ]; // TODO: remove this placeholder and use the above commented out logic
  const [links, setLinks] = useState(placeholderLinks);

  // TODO: make submitting the form update the user component
  // User.findOneAndUpdate(projectId, component ID)
  // const compTitle = [title,setTitle] = useState(User.findById(:projectID/:componentId));
  const [title, setTitle] = useState("");

  const handleAddNav = () => {
    const newLink = { title: "", location: "" };
    setLinks(...links, newLink);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const submitChanges = (e) => {
    e.preventDefault();
    // TODO: add a mutation request for user/project/component, findOneAndUpdate(_id);
    window.location.href = "/app/projects/";
  };

  return (
    <form action="">
      <h2>A form for editing a header component</h2>
      <label htmlFor="title"></label>
      <input
        onChange={handleChange}
        className="full-width-input"
        id="title"
        type="text"
        value={title}
      />
      {/*links.map((link) => {
        <div className="conditional__fields">
          <label htmlFor={link.title}>Navlink Label</label>
          <input
            className="full-width-input"
            id={link.title}
            key={link.title}
            type="text"
            value={link.title}
          />
          <label htmlFor={link.location}>Navlink Location</label>
          <input
            className="full-width-input"
            id={link.location}
            key={link.location}
            type="text"
            value={link.location}
          />
        </div>;
      }) */}
      {/* <button className="add__new" onClick={handleAddNav}>
        Add
      </button>
    */}
      <button className="cancel" onClick={() => openModal(false)}>
        Cancel
      </button>
      <button className="submit" onClick={submitChanges}>
        Submit
      </button>
    </form>
  );
}

export default EFHeader;
