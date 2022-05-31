import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

function Login( props ) {
    
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
  
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
        const { data } = await login({
          variables: { ...formState },
        });
  
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setFormState({
        email: '',
        password: '',
      });
    };

    return (
        <section className="login__card">
            <form action="">
                <label htmlFor="loginEmail">
                    Email
                </label>
                <input
                    id="loginEmail"
                    type="text"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                />
                <label htmlFor="loginPass">
                    Password
                </label>
                <input
                    id="loginPass"
                    type="password"
                    name="password"
                    value={formState.password}
                    onChange={handleChange}
                />
                <input
                    type="submit"
                    value="Log In"
                    onSubmit={handleSubmit}
                />
            </form>
            <p>Dont already have an account? <Link to='/app/signup'>Sign up</Link></p>
        </section>
    );
};

export default Login;