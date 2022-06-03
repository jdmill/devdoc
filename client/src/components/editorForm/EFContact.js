import { useState } from "react";

function EFContact({ openModal }) {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
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
      <h2>A form for editing a contact form component</h2>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          className="full-width-input"
          id="firstName"
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          className="full-width-input"
          id="lastName"
          type="text"
          name="lastName"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          className="full-width-input"
          id="email"
          type="text"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="comment">Comment</label>
        <textarea
          className="full-width-input"
          id="comment"
          type="text"
          name="comment"
          onChange={handleChange}
        />
      </div>
      <div>
        <button className="submit__btn" type="submit">
          Submit
        </button>
      </div>
      <button className="cancel" onClick={() => openModal(false)}>
        Cancel
      </button>
    </form>
  );
}

export default EFContact;
