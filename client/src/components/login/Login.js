import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import "./login.css";

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
    <div className="gray__bg">
      <section className="login__card">
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="loginEmail" className="first__label login__labels">
              Email
            </label>
            <input
              className="login__input"
              id="loginEmail"
              type="text"
              name="email"
              placeholder="Email Here"
              onChange={handleChange}
            />
            <div>
              <label htmlFor="loginPass" class="login__labels">
                Password
              </label>
              <input
                className="login__input"
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
              <input
                className="login__btn"
                type="submit"
                value="Log In"
                onSubmit={handleSubmit}
              />
            </div>
          </form>
        </div>
      </section>
      <p className="prompt">
        Dont already have an account?{" "}
        <Link className="prompt__link" to="/app/signup">
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default Login;
