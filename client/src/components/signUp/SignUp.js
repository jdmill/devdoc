import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";
import styles from '../login/login.css';

function SignUp() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  return (
    <div className="gray__bg">
      <section className="login__card">
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="signupUsername" className="first__label">Username</label>
            <input
              id="signupUsername"
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="signupEmail">Email</label>
            <input
              id="signupEmail"
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="signupPass">Password</label>
            <input
              id="signupPass"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="confirmPass">Confirm Password</label>
            <input id="confirmPass" type="password" name="confirmPassword" />
          </div>
          <div>
            <button className="login__btn" type="submit">Submit</button>
          </div>
        </form>
      </section>
      <p className="prompt">
          Already have an account? <Link className="prompt__link" to="/app/login">Log in</Link>
        </p>
    </div>
  );
}

export default SignUp;
