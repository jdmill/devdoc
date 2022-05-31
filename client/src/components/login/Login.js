import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const res = await login({
        variables: { email: formState.email, password: formState.password },
      });

      const token = res.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <section className="login__card">
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="loginEmail">Email</label>
          <input
            id="loginEmail"
            type="text"
            name="email"
            placeholder="Email Here"
            onChange={handleChange}
          />
          <div>
            <label htmlFor="loginPass">Password</label>
            <input
              id="loginPass"
              type="password"
              name="password"
              placeholder="Password Here"
              onChange={handleChange}
            />
          </div>
          {error ? (
            <div>
              <p className="error-text">
                The provided credentials are incorrect
              </p>
            </div>
          ) : null}
          <div>
            <input type="submit" value="Log In" onSubmit={handleSubmit} />
          </div>
        </form>
        <p>
          Dont already have an account? <Link to="/app/signup">Sign up</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
